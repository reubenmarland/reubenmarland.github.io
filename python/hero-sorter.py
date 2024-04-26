# -*- coding: utf-8 -*-
"""
Created on Thu Apr 25 16:25:07 2024

@author: reube
"""

def split_text(text, max_length=50):
    words = text.split()
    current_line = ""
    lines = []
    
    for word in words:
        
        if len(current_line) + len(word) + 1 > max_length:
            lines.append(current_line)
            current_line = word
        else:
            if current_line:
                current_line += " "
            current_line += word
            
    if current_line:
        lines.append(current_line)
        
    return lines

def create_txt(lines):
    txt_output = ""
    for line in lines:
        txt_output += f"<div class=\"hero-rhs\"><span class=\"animate-line default\">{line}</span></div>\n"
    return txt_output

text = "For a formative task set in 2nd year, we had to complete the design of a rear axel for an ATV. My role on this project was to complete the CAD design and generate technical drawings. This was the first time I had used Fusion 360 as a strictly mechanical tool, incorporating parts with tight tolerances, as well as integrating motion links. This project laid a foundation for future mechanical CAD design, that will include joints, motion-links and realistic design."

lines = split_text(text, 50)
txt_result = create_txt(lines)

print(txt_result)