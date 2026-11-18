import importlib
for p in ["numpy","shapely","pyproj","rasterio","fitz","PIL","geopandas","osgeo"]:
    try:
        m = importlib.import_module(p); print(p, getattr(m, "__version__", "ok"))
    except Exception as e:
        print(p, "FALTA")
