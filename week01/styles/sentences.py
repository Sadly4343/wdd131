import random
wordss = ["past", "present", "future"]
quantity = random.randint(0, 1)
tense = random.choice(wordss)

def main():
    make_sentence()
    make_sentence()
    make_sentence()
    make_sentence()
    make_sentence()
    make_sentence()


def get_determiner(quantity):

    if quantity == 1:
        words = ["a", "one", "the"]
    else:
        words = ["some", "many", "the"]
    # Randomly choose and return a determiner.
    word = random.choice(words)
    
    return word
def get_noun(quantity):

    if quantity == 1:
        words = ["Time", "Year", "Person", "Wife", "Life", "Tomato", "Cactus", "People"]
    else:
        words = ["Times", "Years", "People", "Wives", "Lives", "Potatoes", "Tomatoes", "Cacti"]
    # Randomly choose and return a determiner.
    word = random.choice(words)
    return word
def get_verb(quantity, tense):
    if (quantity == 1 and tense == "present"):
        words = ["walking", "running", "sprinting"]
    if (quantity == 1 and tense == "future"):
        words = ["will walk", "will run", "will sprint"]
    else:
        words = ["has walked", "has run", "has sprinted"]
    # Randomly choose and return a determiner.
    word = random.choice(words)
    
    return (word)
def get_preposition():
    words = [
    "about", "above", "across", "after", "along",
    "around", "at", "before", "behind", "below",
    "beyond", "by", "despite", "except", "for",
    "from", "in", "into", "near", "of",
    "off", "on", "onto", "out", "over",
    "past", "to", "under", "with", "without"]
    word = random.choice(words)
    return word

def get_prepositional_phrase(quantity):
    if quantity == 1:
        total = (f"{get_preposition} {get_verb} {get_noun}")
    else:




def make_sentence():
    ocean = get_noun(quantity)
    water = get_determiner(quantity)
    waters = water.capitalize()
    tea = get_verb(quantity, tense)
    full_sent = f"{waters} {ocean} {tea}."
    print(full_sent)
    return full_sent

main()

