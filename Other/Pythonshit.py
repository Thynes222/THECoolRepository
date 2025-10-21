print("Hello welcome to coffee shop")

name = input("whats your name? ")

if name == "Ben" or name == "Patricia" or name == "Loki" or name == "Holden":

   evil_status = input("are you evil?\n")

   good_deeds = int(input("how many good deeds have you done today?\n"))

   if evil_status == "yes" and good_deeds < 4:

       print("your not welcome here " + name + "! GET OUT!")

       exit()

   else:

       print("your not an evil " + name + "? come one in!" )

else:

   print("Hello " + name + ", thanks for coming in today!\n\n")

menu = "regular coffee, black coffee, latte, espresso, cappucino, cookies"

print(name + ", what would you like from the menu today? here is what we have.\n\n\n" + menu)

order = input()

price = 8

quantity = input("how many do you want?\n")

if order == "latte":

   price = 16

elif order == "black coffee":

   price = 4

elif order == "regular coffee":

   price = 6

elif order == "espresso":

   price = 8

elif order == "cappucino":

   price = 10

elif order == "cookies":

   price = 2

else:

   print("sorry, we dont serve that here")

   exit()

total = price * int(quantity)

print("thanks, your total is: $" + str(total))

print("Sounds good " + name + ",we will have your " + quantity + order + " ready for you in a moment.")

