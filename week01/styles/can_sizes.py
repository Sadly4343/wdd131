import math
 
cans = {
    "1": [6.83, 10.16],
    "2": [7.78, 11.91],
    "3": [8.73, 11.59],
    "4": [10.32, 11.91],
    "5": [10.79, 17.78],
    "6": [13.02, 14.29],
    "7": [5.40, 8.89],
    "8": [6.83, 7.62],
    "9": [15.72, 17.78],
    "10": [6.83, 12.38],
    "11": [7.62, 11.27],
    "12": [8.10, 11.11]
}
max = cans[0]
 
def main():
    for i, data in cans.items():
        radius, height = data
        volume = compute_volume(radius, height)
        surface_area = compute_surface_area(radius, height)
        if i > max:
            max = i
 
        print(f"Lata {i}:")
        print(f"Volume: {volume:.2f}")
        print(f"  Surface area: {surface_area:.2f}")
 
def compute_volume(radius, height):
    volume = math.pi * radius ** 2 * height
    return volume
 
def compute_surface_area(radius, height):
    surface_area = 2 * math.pi * radius * (radius + height)
    return surface_area

main()