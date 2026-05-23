import fitz  # PyMuPDF
import os
from pathlib import Path

# PDF path
pdf_path = r"C:\Users\bhera\Downloads\Copia de BITÁCORA DE REGISTRO - Historia_20260521_232259_0000.pdf"

# Output directory
output_dir = Path(r"c:\Users\bhera\OneDrive\Desktop\angel el off\vivid-canvas-scroll-main\extracted_content")
output_dir.mkdir(exist_ok=True)

# Create subdirectories
images_dir = output_dir / "images"
images_dir.mkdir(exist_ok=True)

text_dir = output_dir / "text"
text_dir.mkdir(exist_ok=True)

# Open PDF
doc = fitz.open(pdf_path)

print(f"Total pages: {len(doc)}")

# Extract content from each page
for page_num in range(len(doc)):
    page = doc[page_num]
    
    # Extract text
    text = page.get_text()
    
    # Save text
    text_file = text_dir / f"page_{page_num + 1}.txt"
    with open(text_file, "w", encoding="utf-8") as f:
        f.write(f"=== PAGE {page_num + 1} ===\n\n")
        f.write(text)
    
    print(f"Extracted text from page {page_num + 1}")
    
    # Extract images
    image_list = page.get_images()
    
    if image_list:
        print(f"Found {len(image_list)} images on page {page_num + 1}")
        
        for img_index, img in enumerate(image_list):
            # Get image data
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Save image
            image_filename = f"page_{page_num + 1}_img_{img_index + 1}.{image_ext}"
            image_path = images_dir / image_filename
            
            with open(image_path, "wb") as f:
                f.write(image_bytes)
            
            print(f"  Saved image: {image_filename}")

doc.close()

print(f"\nExtraction complete!")
print(f"Text saved to: {text_dir}")
print(f"Images saved to: {images_dir}")
