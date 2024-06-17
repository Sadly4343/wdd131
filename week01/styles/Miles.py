def main():
    start_miles = float(input("What is your odometer in U.S Miles? "))
    end_miles = float(input("What is your end odometer value? "))
    amount_gallons = float(input("What is your fuel amount in gallons? "))
    print(f'{miles_per_gallon} miles per gallon ')
    print(f'{lp100k_from_mpg} liters per 100 Kilometers')
    mpg = miles_per_gallon(start_miles, end_miles, amount_gallons)
    lp100k = 
    return
def miles_per_gallon(start_miles, end_miles, amount_gallons):
    mpg = (end_miles - start_miles) / amount_gallons
    return
def lp100k_from_mpg(mpg):
    liters = 235.215 / mpg
    return
main()