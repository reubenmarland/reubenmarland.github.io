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
        txt_output += f"<div><span class=\"animate-line default\">{line}</span></div>\n"
    return txt_output

text = "The app’s financial model is designed to be mutually beneficial; it uses a profit-sharing strategy where revenues from sold meals are split between \"Still Tasty\" and the participating restaurants. This encourages more restaurants to join the platform, thereby expanding our serviceable market. The project was not only a technical challenge but also an intensive market analysis exercise, requiring us to engage directly with potential clients and conduct detailed financial planning. The app’s development was planned in stages, starting with design and moving through development, affiliate acquisition, public launch, and expansion. We projected the financial break-even point to occur by the second year, factoring in initial development costs and ongoing operational expenses."

lines = split_text(text, 50)
txt_result = create_txt(lines)

print(txt_result)