def digit_to_roman(digit, one, five, ten):

    if digit == 9:
        return one + ten
    elif digit >= 5:
        return five + (one * (digit - 5))
    elif digit == 4:
        return one + five
    else:
        return one * digit

def convert_to_roman(input):

    digit1 = (input) % 10
    digit2 = (((input) % 100) - digit1) // 10
    digit3 = (((input) % 1000) - digit2 - digit1) // 100
    digit4 = (((input) % 10000) - digit3 - digit2 - digit1) // 1000

    thousands_roman = "M" * digit4
    hundreds_roman = digit_to_roman(digit3, "C", "D", "M")
    tens_roman = digit_to_roman(digit2, "X", "L", "C")
    units_roman = digit_to_roman(digit1, "I", "V", "X")

    roman_numeral = thousands_roman + hundreds_roman + tens_roman + units_roman

    print(roman_numeral)


convert_to_roman(70) 