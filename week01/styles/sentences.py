import random
#5. Exceeded requirements added the get_adverb function so the sentence now has adverbs within the sentence for the 
#program. It adds additional context to the sentence and makes it have more to read for the user. 
wordss = ["past", "present", "future"]

def main():
    for i in [1,2]:
        for x in wordss:
            make_sentence(i,x)

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
        words = ["bird", "computer", "car", "cat", "tree",
        "dog", "book", "man", "rabbit", "woman"]
    else:
        words = ["birds", "computers", "cars", "cats", "trees",
        "dogs", "books", "men", "rabbits", "women"]
    # Randomly choose and return a determiner.
    word = random.choice(words)
    return word

def get_verb(quantity, tense):

    # words for past tense
    if (tense == "past"):
        words = ["drank", "ate", "grew", "laughed", "thought","ran", "slept", "talked", "walked", "wrote"]

   # words for present tense
    if (tense == "present"):
        if (quantity==1):
            words = ["drinks", "eats", "grows", "laughs", "thinks","runs", "sleeps", "talks", "walks", "writes"]
        else:
            words = ["drink", "eat", "grow", "laugh", "think","run", "sleep", "talk", "walk", "write"]

   # words for future tense
    if (tense == "future"):
        words = ["will drink", "will eat", "will grow", "will laugh","will think", "will run", "will sleep", "will talk","will walk", "will write"]

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
def get_adverb():
    words = ["early", "late", "soon", "fast", "rapidly", "gradually"]
    word = random.choice(words)
    return word


def get_prepositional_phrase(quantity):
    noun = get_noun(quantity)
    deter = get_determiner(quantity).capitalize()
    prep = get_preposition()

    phrase = f"{deter} {noun} {prep}"
    return phrase


def make_sentence(quantity, tense):
    noun = get_noun(quantity)
    determiner = get_determiner(quantity)
    verb = get_verb(quantity, tense)
    phrase = get_prepositional_phrase(quantity)
    adverb = get_adverb()
    full_sent = f"{phrase} {determiner} {noun} {adverb} {verb}."
    print(full_sent)
    #return full_sent

main()

