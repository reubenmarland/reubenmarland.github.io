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

text = "This project not only exemplified innovative engineering solutions to real-world problems but also highlighted the importance of interdisciplinary skills, including digital design, cost management, and sustainable engineering principles. The project culminated in a detailed evaluation of the design, manufacturing feasibility, and operational testing, setting the stage for potential future deployment and real-world impact."

lines = split_text(text, 50)
txt_result = create_txt(lines)

print(txt_result)