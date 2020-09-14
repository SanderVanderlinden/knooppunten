def maak_route(input_data):

    route = []
    link = "https://www.google.be/maps/dir/?api=1&travelmode=bicycling"

    for line in input_data.split("\n"):
        if line.strip().startswith("<wpt"):
            coords = line.split()
            route.append("{},{}".format(coords[1][5:-2], coords[2][5:-2]))

    link_van_naar = "{}&origin={}".format(link, route[0])
    if len(route) > 2:
        link_van_naar += "&waypoints={}".format("|".join(route[1:-1]))
    link_van_naar += "&destination={}".format(route[-1])

    link_naar_van = "{}&origin={}".format(link, route[-1])
    if len(route) > 2:
        link_naar_van += "&waypoints={}".format("|".join(route[-2:0:-1]))
    link_naar_van += "&destination={}".format(route[0])

    return (link_van_naar, link_naar_van)
