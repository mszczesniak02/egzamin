'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function getDefaultData() {
    return {
        displayRunner: true,
        useGrammar: false,
        language: 'en, ru, uk'
    };
}
class OrthographySettings {
    constructor(plugin, emitter) {
        this.plugin = plugin;
        this.data = getDefaultData();
        this.emitter = emitter;
    }
    get displayRunner() {
        const { data } = this;
        return data.displayRunner;
    }
    set displayRunner(value) {
        const { data } = this;
        data.displayRunner = value;
        this.emitter.trigger('onUpdateSettings', this.data);
    }
    get useGrammar() {
        const { data } = this;
        return data.useGrammar;
    }
    set useGrammar(value) {
        const { data } = this;
        data.useGrammar = value;
        this.emitter.trigger('onUpdateSettings', this.data);
    }
    get language() {
        const { data } = this;
        return data.language;
    }
    set language(value) {
        const { data } = this;
        data.language = value;
        this.emitter.trigger('onUpdateSettings', this.data);
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const { plugin } = this;
            this.data = Object.assign(getDefaultData(), yield plugin.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const { plugin, data } = this;
            if (plugin && data) {
                yield plugin.saveData(data);
            }
        });
    }
}

// Grammer popup
const O_POPUP = 'obsidian-orthography-popup';
const O_POPUP_DISABLED = 'obsidian-orthography-popup--disabled';
const O_POPUP_CONTROLS = 'obsidian-orthography-popup-controls';
const O_POPUP_ITEM = 'obsidian-orthography-popup-item';
const O_POPUP_RESIZED = 'obsidian-orthography-popup--resized';
const O_POPUP_ITEM_OPENED = 'obsidian-orthography-popup-item--opened';
const O_POPUP_WORD_TO_REPLACE = 'obsidian-orthography-word-to-replace';
const O_POPUP_IGNORE_BUTTON = 'obsidian-orthography-ignore-button';
// Runner
const O_RUNNER = 'obsidian-orthography-runner';
const O_RUNNER_HIDDEN = 'obsidian-orthography-runner--hidden';
const O_RUNNER_LOADING = 'obsidian-orthography-runner--loading';
// Highlight
const O_HIGHLIGHT = 'obsidian-orthography-highlight';
const O_HIGHLIGHT_FOCUSED = 'obsidian-orthography-highlight--focused';
// Personal Dictionary
const O_DICT_WORD_CHECKBOX = 'obsidian-orthography-dictionary-word-checkbox';

const O_RUNNER_ICON = '✦';
const O_RUNNER_ICON_CLEAR = '✕';
const O_NOT_OPEN_FILE = 'Please open a file first.';
const O_SERVER_ERROR = 'The server is not responding. Please check your Internet connection.';
const O_NO_ERROR = 'Spelling errors not found!';

const UIControls = (hasData) => {
    return `
      <div class="obsidian-orthography-popup-controls">
        <div id="dictionary-opener" class="obsidian-orthography-popup-controls-item" title="See your personal dictionary">📓</div>
        ${hasData
        ? '<div id="reloader" class="obsidian-orthography-popup-controls-item" title="Restart the orthography checker">↻</div>'
        : '<div id="checker" class="obsidian-orthography-popup-controls-item obsidian-orthography-popup-run" title="Run the orthography checker">▶</div>'}
        <div id="closer" class="obsidian-orthography-popup-controls-item obsidian-orthography-popup-close" title="Close popup">✕</div>
      </div>
    `;
};

const JOIN_BY = '<span style="opacity: 0.5;">or</span>&nbsp;';
const renderHints = (card, index) => {
    const { replacements, text, begin, highlightText } = card;
    if (card.category === 'Determiners') {
        return replacements
            .map((item) => {
            return `
          <span
            data-toreplace="${item}"
            data-index="${index}"
            data-begin="${begin}"
            data-text="${text}"
            class="obsidian-orthography-word-to-replace obsidian-orthography-popup-replacement"
            title="Click to correct your spelling">
              <b>${item}</b>&nbsp${highlightText}
          </span>`;
        })
            .join(JOIN_BY);
    }
    // ----------- FOR REMOVE HINTS ----------- //
    if (card.category === 'Formatting' ||
        card.category === 'BasicPunct' ||
        card.category === 'Wordiness' ||
        card.category === 'Conjunctions') {
        return `
      <span
        data-begin="${begin}"
        data-text="${text}"
        data-toreplace="${replacements[0]}"
        class="obsidian-orthography-word-to-replace obsidian-orthography-popup-hightligh--red">${highlightText || ''}
      </span>
    `;
    }
    if (card.category === 'Prepositions') {
        return replacements
            .map((item) => {
            return `
        <span
          data-toreplace="${item}"
          data-index="${index}"
          data-begin="${begin}"
          data-text="${highlightText}"
          class="obsidian-orthography-word-to-replace obsidian-orthography-popup-replacement"
          title="Click to correct your spelling"
        >
          <b>${item}</b>&nbsp${highlightText}
        </span>`;
        })
            .join(JOIN_BY);
    }
    return replacements
        .map((item) => {
        return `
        <span class="obsidian-orthography-popup-card--line-through">${highlightText}</span>
        <span
          data-toreplace="${item}"
          data-index="${index}"
          data-begin="${begin}"
          data-text="${text}"
          class="obsidian-orthography-word-to-replace obsidian-orthography-popup-replacement"
          title="Click to correct your spelling"
        >
          ${item}
        </span>`;
    })
        .join(JOIN_BY);
};
const ignoreButton = (card, index) => {
    const { category, text, begin } = card;
    const isMisspelled = category === 'Misspelled';
    return isMisspelled
        ? `<button class="obsidian-orthography-ignore-button" 
            title="add '${text}' to your personal dictionary"
            data-index="${index}"
            data-begin="${begin}"
            data-text="${text}">
             Ignore
           </button>`
        : '';
};
const UIHints = (alerts) => {
    if (!alerts || !alerts.length)
        return '';
    return alerts
        .map((card, index) => {
        const { impact, highlightText, minicardTitle, explanation, cardLayout, begin } = card;
        return `
          <div data-begin="${begin}" id="obsidian-orthography-popup-item-${index}" class="obsidian-orthography-popup-item ${impact}">
            <div class="obsidian-orthography-popup-minicard">
              <div>${highlightText || ''}</div>
              ${minicardTitle
            ? `<div class="obsidian-orthography-popup-item-sugg">${minicardTitle}</div>`
            : ''}
              <div class="obsidian-orthography-popup-arrows">
                <svg width="10" viewBox="0 0 10 10"><path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path></svg>
                <svg width="10" viewBox="0 0 10 10"><path d="M5 4.3L.85.14c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L5 5.7 9.85.87c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L5 4.28z" stroke="none" transform="translate(0 3) rotate(0)"></path></svg>
              </div>
            </div>
            <div class="obsidian-orthography-popup-card">
              <div>${cardLayout.group || ''}
                <div class="obsidian-orthography-popup-ignore">
                  ${ignoreButton(card, index)}
                </div>
              </div>              
              <div class="obsidian-orthography-popup-card-content">
                ${renderHints(card, index)}
              </div>
              <div>${explanation || ''}</div>
            </div>
          </div>
        `;
    })
        .join('');
};

const UIHintsFallback = () => {
    const hintsFallback = `
    <div class="obsidian-orthography-hints-fallback">
      <button id="runner">
        Run orthography check
      </button>
      <p>Alpha version</p>
    </div>
  `;
    return hintsFallback;
};

const UILoader = () => {
    const loader = `
    <div class="obsidian-orthography-loader">
      Checking...
    </div>
  `;
    return loader;
};

const UIDictionary = (dictionary) => {
    if (!dictionary.length) {
        return `<p class="obsidian-orthography-dictionary-empty">Your personal dictionary is empty.</p>`;
    }
    return `
    <div class="obsidian-orthography-dictionary-container">
      <h2 class="obsidian-orthography-dictionary-title">Your Personal Dictionary</h2>
      <div class="obsidian-orthography-dictionary-button-container">
        <button id="select-all-button" class="obsidian-orthography-dictionary-button">Select All</button>
        <button id="remove-selected-button" class="obsidian-orthography-dictionary-button">Remove</button>
      </div>
      <div class="obsidian-orthography-dictionary-list">
        ${dictionary
        .map((word, index) => `
          <div class="obsidian-orthography-dictionary-item">
            <div class="obsidian-orthography-dictionary-word-text">
              <input type="checkbox" class="obsidian-orthography-dictionary-word-checkbox" id="word-${index}" value="${word}">
              <label for="word-${index}">${word}</label>
            </div>
          </div>
        `)
        .join('')}
      </div>
    </div>
  `;
};

const UIBar = (data, loading, showDictionary = false, dictionary = []) => {
    const hasData = data && data.alerts && data.alerts.length;
    const controls = UIControls(!!hasData);
    const fallback = loading ? UILoader() : UIHintsFallback();
    const cards = showDictionary
        ? UIDictionary(dictionary)
        : hasData
            ? UIHints(data.alerts)
            : fallback;
    return `${controls}${cards}`;
};

class PersonalDictionary {
    constructor(app) {
        this.data = { dictionary: [] };
        this.category = 'Misspelled';
        this.app = app;
    }
    get dictionary() {
        return this.data.dictionary || [];
    }
    loadDictionary() {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = this.getDictionaryFilePath();
            try {
                if (yield this.app.vault.adapter.exists(filePath)) {
                    const storedData = yield this.app.vault.adapter.read(filePath);
                    const parsedData = JSON.parse(storedData);
                    if (parsedData && Array.isArray(parsedData.dictionary)) {
                        this.data.dictionary = parsedData.dictionary;
                    }
                    else {
                        this.data.dictionary = [];
                    }
                }
                else {
                    this.data.dictionary = [];
                    yield this.saveDictionary();
                }
            }
            catch (error) {
                new obsidian.Notice('Error loading personal dictionary');
            }
        });
    }
    addWord(word) {
        return __awaiter(this, void 0, void 0, function* () {
            word = word.toLowerCase();
            if (!this.data.dictionary.includes(word)) {
                this.data.dictionary.push(word);
                yield this.saveDictionary();
            }
        });
    }
    remove(wordsToRemove) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data.dictionary = this.data.dictionary.filter((word) => {
                word = word.toLowerCase();
                return !wordsToRemove.includes(word);
            });
            yield this.saveDictionary();
        });
    }
    filterAlerts(alerts) {
        return alerts.filter((alert) => {
            if (alert && alert.text && alert.category) {
                if (alert.category === this.category) {
                    return !this.containsWord(alert.text);
                }
            }
            return true;
        });
    }
    containsWord(word) {
        return this.data.dictionary.includes(word.toLowerCase());
    }
    getDictionaryFilePath() {
        return `${this.app.vault.configDir}/plugins/obsidian-orthography/dictionary.json`;
    }
    saveDictionary() {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = this.getDictionaryFilePath();
            try {
                const dataToSave = JSON.stringify({ dictionary: this.data.dictionary }, null, 1);
                yield this.app.vault.adapter.write(filePath, dataToSave);
            }
            catch (error) {
                new obsidian.Notice('Error saving personal dictionary');
            }
        });
    }
}
PersonalDictionary.instance = null;

let self$3;
class PersonalDictionaryTab {
    constructor(orthographyPopup, dictionary) {
        this.orthographyPopup = orthographyPopup;
        this.dictionary = dictionary;
        this.init();
    }
    init() {
        self$3 = this;
    }
    create() {
        self$3.setListeners();
    }
    destroy() {
        self$3.removeListeners();
    }
    update() {
        self$3.removeListeners();
        self$3.setListeners();
    }
    setListeners() {
        self$3.selectAllBtn = document.getElementById('select-all-button');
        if (self$3.selectAllBtn) {
            self$3.selectAllBtn.addEventListener('click', self$3.onSelectAllCheckboxes.bind(self$3));
        }
        self$3.removeSelectedBtn = document.getElementById('remove-selected-button');
        if (self$3.removeSelectedBtn) {
            self$3.removeSelectedBtn.addEventListener('click', self$3.onRemoveSelected.bind(self$3));
        }
    }
    removeListeners() {
        self$3.selectAllBtn = document.getElementById('select-all-button');
        if (self$3.selectAllBtn) {
            self$3.selectAllBtn.removeEventListener('click', self$3.onSelectAllCheckboxes.bind(self$3));
        }
        self$3.removeSelectedBtn = document.getElementById('obsidian-orthography-remove-selected-button');
        if (self$3.removeSelectedBtn) {
            self$3.removeSelectedBtn.removeEventListener('click', self$3.onRemoveSelected.bind(self$3));
        }
    }
    onSelectAllCheckboxes() {
        const checkboxes = document.querySelectorAll(`.${O_DICT_WORD_CHECKBOX}`);
        const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
        checkboxes.forEach((checkbox) => {
            checkbox.checked = !allChecked;
        });
    }
    onRemoveSelected() {
        const checkboxes = document.querySelectorAll(`.${O_DICT_WORD_CHECKBOX}:checked`);
        const wordsToRemove = Array.from(checkboxes).map((checkbox) => checkbox.value);
        self$3.dictionary.remove(wordsToRemove);
        self$3.orthographyPopup.update(null, false, true);
    }
}

let self$2;
class OrthographyPopup {
    constructor(app, settings, emitter, personalDictionary) {
        this.popupOffset = [0, 0];
        this.moverSelected = false;
        this.created = false;
        this.app = app;
        this.settings = settings;
        this.emitter = emitter;
        this.personalDictionary = personalDictionary;
        this.personalDictionaryTab = new PersonalDictionaryTab(this, personalDictionary);
    }
    init() {
        self$2 = this;
    }
    create() {
        self$2.created = true;
        self$2.popup = document.createElement('div');
        self$2.popup.classList.add(O_POPUP);
        self$2.popup.id = O_POPUP;
        const bar = UIBar(null, false);
        self$2.popup.innerHTML = bar;
        document.body.appendChild(self$2.popup);
        self$2.setListeners();
    }
    destroy() {
        self$2.created = false;
        self$2.removeListeners();
        self$2.personalDictionaryTab.destroy();
        const popup = document.getElementById(O_POPUP);
        if (popup)
            popup.remove();
    }
    update(data, loading, showDictionary = false) {
        self$2.removeListeners();
        const dictionary = this.personalDictionary
            ? this.personalDictionary.dictionary
            : [];
        const bar = UIBar(data, loading, showDictionary, dictionary);
        self$2.popup.innerHTML = bar;
        self$2.setListeners();
        showDictionary
            ? self$2.personalDictionaryTab.update()
            : self$2.personalDictionaryTab.destroy();
    }
    setLoader() {
        this.update(null, true);
    }
    removeLoader() {
        this.update(null, false);
    }
    disable() {
        const hints = document.querySelector(`#${O_POPUP}`);
        if (hints) {
            hints.classList.add(O_POPUP_DISABLED);
        }
    }
    enable() {
        const hints = document.querySelector(`#${O_POPUP}`);
        if (hints) {
            hints.classList.remove(O_POPUP_DISABLED);
        }
    }
    setListeners() {
        const minicards = document.querySelectorAll(`.${O_POPUP_ITEM}`);
        minicards.forEach((mc) => mc.addEventListener('click', self$2.onClickByHint));
        minicards.forEach((mc) => mc.addEventListener('mouseover', self$2.onFocusWord));
        minicards.forEach((mc) => mc.addEventListener('mouseout', self$2.onRemoveFocusWord));
        const replacements = document.querySelectorAll(`.${O_POPUP_WORD_TO_REPLACE}`);
        replacements.forEach((rp) => rp.addEventListener('click', self$2.onReplaceWord));
        const ignoreButtons = document.querySelectorAll(`.${O_POPUP_IGNORE_BUTTON}`);
        ignoreButtons.forEach((button) => button.addEventListener('click', self$2.onIgnore));
        self$2.reloader = document.getElementById('reloader');
        if (self$2.reloader) {
            self$2.reloader.addEventListener('click', self$2.onRun);
        }
        self$2.dictionaryOpener = document.getElementById('dictionary-opener');
        if (self$2.dictionaryOpener) {
            self$2.dictionaryOpener.addEventListener('click', self$2.onOpenDictionary);
        }
        self$2.runner = document.getElementById('runner');
        if (self$2.runner) {
            self$2.runner.addEventListener('click', self$2.onRun);
        }
        self$2.checker = document.getElementById('checker');
        if (self$2.checker) {
            self$2.checker.addEventListener('click', self$2.onRun);
        }
        self$2.sizer = document.getElementById('sizer');
        if (self$2.sizer) {
            self$2.sizer.addEventListener('click', self$2.onResize);
        }
        self$2.closer = document.getElementById('closer');
        if (self$2.closer) {
            self$2.closer.addEventListener('click', self$2.onClose);
        }
        self$2.mover = document.querySelector(`.${O_POPUP_CONTROLS}`);
        if (self$2.mover) {
            self$2.mover.addEventListener('mousedown', self$2.moverIsDown);
        }
        document.addEventListener('mouseup', self$2.onMouseUp);
        document.addEventListener('mousemove', self$2.onMouseMove);
    }
    removeListeners() {
        const minicards = document.querySelectorAll(`.${O_POPUP_ITEM}`);
        minicards.forEach((mc) => mc.removeEventListener('click', self$2.onClickByHint));
        minicards.forEach((mc) => mc.removeEventListener('mouseover', self$2.onFocusWord));
        minicards.forEach((mc) => mc.removeEventListener('mouseout', self$2.onRemoveFocusWord));
        const replacements = document.querySelectorAll(`.${O_POPUP_WORD_TO_REPLACE}`);
        replacements.forEach((rp) => rp.removeEventListener('click', self$2.onReplaceWord));
        const ignoreButtons = document.querySelectorAll(`.${O_POPUP_IGNORE_BUTTON}`);
        ignoreButtons.forEach((button) => button.removeEventListener('click', self$2.onIgnore));
        if (self$2.reloader)
            self$2.reloader.removeEventListener('click', self$2.onRun);
        if (self$2.dictionaryOpener)
            self$2.dictionaryOpener.removeEventListener('click', self$2.onOpenDictionary);
        if (self$2.checker)
            self$2.checker.removeEventListener('click', self$2.onRun);
        if (self$2.runner)
            self$2.runner.removeEventListener('click', self$2.onRun);
        if (self$2.sizer)
            self$2.sizer.removeEventListener('click', self$2.onResize);
        if (self$2.closer)
            self$2.closer.removeEventListener('click', self$2.onClose);
        if (self$2.mover)
            self$2.mover.removeEventListener('mousedown', self$2.moverIsDown);
        document.removeEventListener('mouseup', self$2.onMouseUp);
        document.removeEventListener('mousemove', self$2.onMouseMove);
    }
    onClickByHint(e) {
        const opened = document.querySelectorAll(`.${O_POPUP_ITEM_OPENED}`);
        opened.forEach((o) => o.classList.remove(O_POPUP_ITEM_OPENED));
        if (e.currentTarget.classList.contains(O_POPUP_ITEM_OPENED)) {
            e.currentTarget.classList.remove(O_POPUP_ITEM_OPENED);
        }
        else {
            e.currentTarget.classList.add(O_POPUP_ITEM_OPENED);
        }
        const begin = e.currentTarget.dataset.begin;
        if (begin) {
            self$2.scrollToWord(begin);
        }
    }
    moverIsDown(e) {
        self$2.moverSelected = true;
        self$2.popupOffset = [
            self$2.popup.offsetLeft - e.clientX,
            self$2.popup.offsetTop - e.clientY
        ];
    }
    onMouseUp() {
        self$2.moverSelected = false;
    }
    onMouseMove(e) {
        e.preventDefault();
        if (self$2.moverSelected) {
            const mousePosition = {
                x: e.clientX,
                y: e.clientY
            };
            self$2.popup.style.left = `${mousePosition.x + self$2.popupOffset[0]}px`;
            self$2.popup.style.top = `${mousePosition.y + self$2.popupOffset[1]}px`;
        }
    }
    onResize() {
        if (self$2.popup.className.contains(O_POPUP_RESIZED)) {
            self$2.popup.classList.remove(O_POPUP_RESIZED);
        }
        else {
            self$2.popup.classList.add(O_POPUP_RESIZED);
        }
    }
    onClose() {
        self$2.emitter.trigger('orthography:close');
    }
    onFocusWord(e) {
        const begin = e.currentTarget.dataset.begin;
        const word = document.querySelector(`.begin-${begin}`);
        if (word) {
            word.classList.add(O_HIGHLIGHT_FOCUSED);
        }
    }
    onRemoveFocusWord() {
        const words = document.querySelectorAll(`.${O_HIGHLIGHT_FOCUSED}`);
        words.forEach((w) => w.classList.remove(O_HIGHLIGHT_FOCUSED));
    }
    onRun() {
        self$2.emitter.trigger('orthography:run');
    }
    onReplaceWord(event) {
        self$2.emitter.trigger('orthography:replace', event);
        const { index } = event.currentTarget.dataset;
        const selectedItem = document.getElementById(`${O_POPUP_ITEM}-${index}`);
        if (selectedItem)
            selectedItem.remove();
        if (!document.querySelectorAll(`.${O_POPUP_ITEM}`).length) {
            self$2.removeLoader();
        }
    }
    onIgnore(event) {
        self$2.emitter.trigger('orthography:ignore', event);
        const { index } = event.currentTarget.dataset;
        const selectedItem = document.getElementById(`${O_POPUP_ITEM}-${index}`);
        if (selectedItem)
            selectedItem.remove();
        if (!document.querySelectorAll(`.${O_POPUP_ITEM}`).length) {
            self$2.removeLoader();
        }
    }
    onOpenDictionary() {
        self$2.update(null, false, true);
    }
    onOpenCard(event) {
        const { value: begin } = event.currentTarget.attributes.begin;
        const popup = document.querySelector(`.${O_POPUP}`);
        const opened = document.querySelectorAll(`.${O_POPUP_ITEM_OPENED}`);
        opened.forEach((o) => o.classList.remove(O_POPUP_ITEM_OPENED));
        const selected = document.querySelector(`[data-begin="${begin}"]`);
        selected.classList.add(O_POPUP_ITEM_OPENED);
        popup.scrollTop = selected.offsetTop;
    }
    scrollToWord(begin) {
        const activeEditor = self$2.getEditor();
        if (activeEditor) {
            activeEditor.scrollTo(0, +begin - 300);
        }
        else {
            self$2.onClose();
            new obsidian.Notice(O_NOT_OPEN_FILE);
        }
    }
    getEditor() {
        const activeLeaf = this.app.workspace.activeLeaf;
        const sourceMode = activeLeaf.view.sourceMode;
        if (!sourceMode)
            return null;
        return activeLeaf.view.sourceMode.cmEditor;
    }
}

let self$1;
class OrthographyToggler {
    constructor(app, settings, emitter) {
        this.app = app;
        this.settings = settings;
        this.emitter = emitter;
    }
    init() {
        self$1 = this;
        this.createButton(O_RUNNER_ICON);
    }
    destroy() {
        this.removeLoading();
        this.toggler.removeEventListener('click', this.toggle);
        this.removeButton();
    }
    toggle() {
        const activeEditor = self$1.getEditor();
        if (!activeEditor) {
            if (self$1.showed) {
                self$1.setButtonWithRunner();
                self$1.showed = false;
            }
            else {
                new obsidian.Notice(O_NOT_OPEN_FILE);
            }
            return;
        }
        self$1.showed = !self$1.showed;
        if (self$1.showed) {
            self$1.setButtonWithClear();
        }
        else {
            self$1.setButtonWithRunner();
        }
    }
    hide() {
        const runner = document.querySelector('.' + O_RUNNER);
        runner.classList.add(O_RUNNER_HIDDEN);
    }
    setLoading() {
        this.toggler.classList.add(O_RUNNER_LOADING);
    }
    removeLoading() {
        this.toggler.classList.remove(O_RUNNER_LOADING);
    }
    reset() {
        this.showed = false;
        this.removeLoading();
        this.updateButtonText(O_RUNNER_ICON);
    }
    createButton(text) {
        this.toggler = document.createElement('button');
        const icon = document.createElement('span');
        icon.innerText = text;
        this.toggler.classList.add(O_RUNNER);
        this.toggler.appendChild(icon);
        document.body.appendChild(this.toggler);
        this.toggler.addEventListener('click', this.toggle);
    }
    updateButtonText(text) {
        const toggler = document.querySelector(`.${O_RUNNER} span`);
        if (toggler)
            toggler.innerText = text;
    }
    removeButton() {
        const toggler = document.querySelector(`.${O_RUNNER}`);
        if (toggler)
            toggler.remove();
    }
    setButtonWithClear() {
        self$1.updateButtonText(O_RUNNER_ICON_CLEAR);
        self$1.emitter.trigger('orthography:open');
    }
    setButtonWithRunner() {
        self$1.updateButtonText(O_RUNNER_ICON);
        self$1.removeLoading();
        self$1.emitter.trigger('orthography:close');
    }
    getEditor() {
        const activeLeaf = this.app.workspace.activeLeaf;
        const sourceMode = activeLeaf.view.sourceMode;
        if (!sourceMode)
            return null;
        return activeLeaf.view.sourceMode.cmEditor;
    }
}

class OrthographyEditor {
    constructor(app, settings, editor) {
        this.app = app;
        this.settings = settings;
        this.editor = editor;
    }
    init() {
        // init
    }
    destroy() {
        this.clearHighlightWords();
    }
    highlightWords(alerts) {
        this.clearHighlightWords();
        if (!this.editor || !alerts || alerts.length === 0)
            return;
        alerts.forEach((alert) => {
            const textLength = alert.text.length || alert.highlightText.length;
            const originalWord = {
                begin: alert.begin,
                end: alert.end,
                len: textLength
            };
            this.highlightWord(originalWord);
        });
    }
    highlightWord(originalWord) {
        if (!this.editor || !originalWord)
            return;
        const colRow = this.getColRow(originalWord);
        if (!colRow)
            return;
        const { col, row } = colRow;
        this.editor.addHighlights([
            {
                from: {
                    line: row,
                    ch: col
                },
                to: {
                    line: row,
                    ch: col + originalWord.len
                }
            }
        ], `${O_HIGHLIGHT} begin-${originalWord.begin}`);
    }
    replaceWord(originalWord, newWord) {
        if (!this.editor || !originalWord || !newWord)
            return;
        const colRow = this.getColRow(originalWord);
        if (!colRow)
            return;
        const { col, row } = colRow;
        const doc = this.editor.getDoc();
        const from = {
            line: row,
            ch: col
        };
        const to = {
            line: row,
            ch: col + originalWord.len
        };
        doc.replaceRange(newWord, from, to);
    }
    getColRow(originalWord) {
        if (!this.editor || !originalWord)
            return;
        let ttl = 0;
        let row = 0;
        let result;
        const { begin } = originalWord;
        const lines = this.editor.lineCount();
        for (let i = 0; i < lines; i++) {
            const lineText = this.editor.getLine(i);
            const s = ttl === 0 ? ttl : ttl + 1;
            const lineTextLength = lineText.length;
            ttl += lineTextLength;
            if (row > 0) {
                ttl++;
            }
            if (begin >= s && begin <= ttl) {
                const diff = ttl - lineTextLength;
                const col = begin - diff;
                result = { col, row };
            }
            row++;
        }
        return result;
    }
    clearHighlightWords() {
        const highlightWords = document.querySelectorAll(`.${O_HIGHLIGHT}`);
        highlightWords.forEach((span) => {
            this.editor.removeHighlights(span.className);
        });
    }
    clearHighlightWord(word) {
        const highlightWords = document.querySelectorAll(`.${O_HIGHLIGHT}`);
        highlightWords.forEach((span) => {
            if (span.innerText === word) {
                span.classList.remove(O_HIGHLIGHT);
                span.classList.remove(O_HIGHLIGHT_FOCUSED);
            }
        });
    }
}

const debounce = (callback, timeout) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(undefined, args);
        }, timeout);
    };
};

const sortAlerts = (alerts) => {
    return alerts.sort((a, b) => a.begin - b.begin);
};
const formatAlerts = (alerts) => {
    const withoutHidden = alerts.filter((alert) => alert.hidden !== true);
    const withoutDuplicate = withoutHidden.reduce((acc, current) => {
        const x = acc.find((item) => item.explanation === current.explanation);
        if (!x) {
            return acc.concat([current]);
        }
        else {
            return acc;
        }
    }, []);
    return withoutDuplicate;
};

const API_URL_GRAMMAR = 'https://obsidian-orthography-api-mz8l64tz3-denisoed.vercel.app/check';

// Use self in events callbacks
let self;
class OrthographyPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.debounceGetDataFunc = debounce(this.onChangeText.bind(this), 500);
        this.getDataFunc = debounce(this.onRunFromPopup.bind(this), 0);
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            // ------ Init -------- //
            self = this;
            this.emitter = new obsidian.Events();
            const settings = new OrthographySettings(this, this.emitter);
            yield settings.loadSettings();
            this.settings = settings;
            // this.addSettingTab(new OrthographySettingTab(this.app, settings, this));
            const personalDictionary = new PersonalDictionary(this.app);
            yield personalDictionary.loadDictionary();
            this.personalDictionary = personalDictionary;
            // ------- Events -------- //
            this.emitter.on('orthography:open', this.onPopupOpen);
            this.emitter.on('orthography:close', this.onPopupClose);
            this.emitter.on('orthography:run', this.getDataFunc);
            this.emitter.on('orthography:replace', this.onReplaceWord);
            this.emitter.on('orthography:ignore', this.onIgnore);
            // Listen to changes in the editor
            this.app.workspace.on('editor-change', this.debounceGetDataFunc);
            // Init orthography
            this.app.workspace.onLayoutReady(() => {
                this.activeEditor = this.getEditor();
                this.initOrthographyToggler();
                this.initOrthographyPopup();
                this.initOrthographyEditor();
            });
        });
    }
    onunload() {
        this.emitter.off('orthography:open', this.onPopupOpen);
        this.emitter.off('orthography:close', this.onPopupClose);
        this.emitter.off('orthography:run', this.onRunFromPopup);
        this.emitter.off('orthography:replace', this.onReplaceWord);
        this.emitter.off('orthography:ignore', this.onIgnore);
        this.app.workspace.off('editor-change', this.debounceGetDataFunc);
        this.toggler.destroy();
        this.popup.destroy();
        this.editor.destroy();
        this.hints = null;
        this.activeEditor = null;
        this.personalDictionary = null;
    }
    initOrthographyToggler() {
        const { app, settings, emitter } = this;
        this.toggler = new OrthographyToggler(app, settings, emitter);
        this.toggler.init();
    }
    initOrthographyPopup() {
        const { app, settings, emitter } = this;
        this.popup = new OrthographyPopup(app, settings, emitter, this.personalDictionary);
        this.popup.init();
    }
    initOrthographyEditor() {
        const { app, settings } = this;
        this.editor = new OrthographyEditor(app, settings, this.activeEditor);
        this.editor.init();
    }
    getEditor() {
        var _a;
        const activeLeaf = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        return (_a = activeLeaf === null || activeLeaf === void 0 ? void 0 : activeLeaf.sourceMode) === null || _a === void 0 ? void 0 : _a.cmEditor;
    }
    onChangeText() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.popup.created)
                return;
            this.runChecker();
        });
    }
    onRunFromPopup() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.popup.created)
                return;
            this.editor.destroy();
            this.popup.setLoader();
            this.activeEditor = this.getEditor();
            if (this.activeEditor) {
                this.runChecker();
            }
            else {
                new obsidian.Notice(O_NOT_OPEN_FILE);
                this.onPopupClose();
            }
        });
    }
    runChecker() {
        return __awaiter(this, void 0, void 0, function* () {
            this.toggler.setLoading();
            if (!this.activeEditor)
                return;
            const text = this.activeEditor.getValue();
            this.hints = yield this.fetchData(text);
            if (this.hints instanceof TypeError) {
                this.popup.removeLoader();
                this.toggler.removeLoading();
                new obsidian.Notice(O_SERVER_ERROR);
                return;
            }
            if (this.hints && this.hints.alerts && this.hints.alerts.length) {
                const alerts = formatAlerts(this.personalDictionary.filterAlerts(this.hints.alerts));
                this.editor.highlightWords(alerts);
                this.popup.update({
                    alerts: sortAlerts(alerts)
                });
            }
            else {
                new obsidian.Notice(O_NO_ERROR);
                this.popup.removeLoader();
            }
            this.toggler.removeLoading();
        });
    }
    onPopupOpen() {
        self.popup.create();
    }
    onPopupClose() {
        self.editor.destroy();
        self.popup.destroy();
        self.toggler.reset();
        if (self.aborter) {
            self.aborter.abort();
            self.aborter = null;
        }
    }
    onReplaceWord(event) {
        const origWordLen = event.currentTarget.dataset.text.length;
        const newWord = event.currentTarget.dataset.toreplace;
        const begin = event.currentTarget.dataset.begin;
        const end = begin + origWordLen;
        self.editor.replaceWord({
            begin: +begin,
            end: +end,
            len: +origWordLen
        }, newWord);
    }
    onIgnore(event) {
        const word = event.currentTarget.dataset.text;
        self.personalDictionary.addWord(word);
        self.editor.clearHighlightWord(word);
    }
    fetchData(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (self.aborter)
                self.aborter.abort();
            self.popup.disable();
            self.aborter = new AbortController();
            const { signal } = self.aborter;
            const url = new URL(API_URL_GRAMMAR);
            const params = { text };
            Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
            try {
                const response = yield fetch(url, {
                    method: 'GET',
                    signal
                });
                self.aborter = null;
                return yield response.json();
            }
            catch (error) {
                return error;
            }
            finally {
                self.popup.enable();
            }
        });
    }
}

module.exports = OrthographyPlugin;


/* nosourcemap */