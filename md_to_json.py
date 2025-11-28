import os
import json
import glob


def md_to_json(md_path, json_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()
    data = {
        "filename": os.path.basename(md_path),
        "content": content
    }
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    os.makedirs("pytania_json", exist_ok=True)
    all_json_files = []
    for md_file in glob.glob("pytania/*.md"):
        json_file = os.path.join("pytania_json", os.path.splitext(
            os.path.basename(md_file))[0] + ".json")
        md_to_json(md_file, json_file)
        all_json_files.append(os.path.basename(json_file))
    # Dodaj spis plików JSON
    with open("pytania_json/index.json", "w", encoding="utf-8") as f:
        json.dump(all_json_files, f, ensure_ascii=False, indent=2)
