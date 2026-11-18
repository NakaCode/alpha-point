# Conta os caracteres dos titulos candidatos (limite 70).
T = """Why One Desert Valley Gets Nearly as Much Colorado River as Arizona
Why Imperial Valley Gets 9 Times More Colorado River Water Than Nevada
The California Valley That Holds a Third of the Lower Colorado River
Why You Can't Just Move to Banff
Why Canada Won't Let You Live in Banff
Why Banff Is the Town You Need Permission to Live In
Why America's Busiest Port Is 50 Miles From the Sea
Why Houston Built Its Port 50 Miles From the Gulf
Why Texas's Biggest Port Isn't on the Coast
Why Jackson Hole Is 97% Land Nobody Can Buy
Why America's Richest County Is 97% Land You Can't Build On
Why Jackson Hole Is So Expensive (It's Not Just the Billionaires)
Why the Outer Banks Are Moving Toward the Mainland
Why the Outer Banks Keep Losing Houses to the Ocean
Why This Lighthouse Had to Be Moved Half a Mile Inland
Why Lake Tahoe Is Split Between Two States
Why Nevada's Casinos Stop at a Line in Lake Tahoe
Why Lake Tahoe Is Two-Thirds California and One-Third Nevada
Why Florida Hid Its Biggest Lake Behind a 143-Mile Wall
Why You Can't See Lake Okeechobee From Most of Its Shore
Why Florida Dumps Lake Okeechobee Into the Ocean
Why Australia's Border Runs 2 Miles Off Papua New Guinea
Why These Australian Islands Sit Next to Papua New Guinea
The Australian Islands Where You Can See Another Country
Why Australia's Biggest Lake Is Usually Empty
Why Lake Eyre Filled Two Years in a Row for the First Time
Why Australia's Rivers Run Into a Lake That Isn't There
Why Mexico Owes Texas Water
Why Mexico Pays Its Debt to Texas in Water
Why the Rio Grande Below El Paso Runs on Mexican Water
Why Fargo's River Flows North Into Canada
Why the Red River Floods by Flowing the Wrong Way
Why This American River Floods Every Spring
Why California's Water Runs Through Islands Below Sea Level
Why California Farms Islands 25 Feet Below Sea Level
Why the Sacramento Delta Is Sinking"""
for t in T.splitlines():
    print(len(t), t)
