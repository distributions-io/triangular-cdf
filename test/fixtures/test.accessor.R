options( digits = 16 )
library( jsonlite )
library( triangle )

a = -800
b = 800
c = 200
x = seq( -1000, 1000, 0.5 )
y = ptriangle( x, a, b, c )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	c = c,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
