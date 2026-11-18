# Conta os caracteres dos titulos da 2a rodada (limite 65).
T = """Why Minnesota Has 10,000 Lakes and Texas Had to Build Its Own
Why America's Natural Lakes Stop at One Line
Why Texas Has Hundreds of Lakes but Almost No Natural Ones
Why the Mississippi River No Longer Matches Its State Lines
Why the Mississippi River Left Pieces of States Behind
Why Some States Own Land on the Wrong Side of the Mississippi
Why Isle Royale Belongs to Michigan, Not Minnesota or Canada
Why Michigan Owns an Island 14 Miles From Canada
Why America Got Isle Royale From a Map With a Fake Island
Why Lake Michigan and Lake Huron Are Actually One Lake
The World's Biggest Freshwater Lake Has Two Names
Why Lake Superior Isn't Really the Biggest Great Lake
Why One Peak in Glacier National Park Drains to Three Oceans
Why Rain in Montana Can End Up in Hudson Bay
Why Montana Moves a Hudson Bay River Into the Missouri
Why White Sands Sits Inside a Missile Range
Why White Sands Is Made of Sand That Should Dissolve
Why the Army Wanted the Land Around White Sands
Why Lake Michigan's Biggest Dunes Are All on One Side
Why Michigan Got the Dunes and Wisconsin Got the Bluffs
Why Sleeping Bear Dunes Sits 450 Feet Above Lake Michigan
Why the U.S.-Canada Border Zigzags Through the Thousand Islands
Why the Thousand Islands Were Split Island by Island
How 1,800 Islands Were Divided Between Two Countries
Why Canada Has a Desert (and It Grows Wine)
Why the Okanagan Valley Is a Desert in Canada
Why Canada's Desert Is the Tip of an American One
Why Hawaii Gets 404 Inches of Rain in One Place and 8 in Another
Why Hawaii Has a Desert and America's Wettest Spot
Why Kauai's West Side Is Dry and Its Center Is a Swamp"""
for t in T.splitlines():
    print(len(t), t)
