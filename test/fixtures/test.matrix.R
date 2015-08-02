options( digits = 16 )
library( jsonlite )
library( triangle )

a = 0
b = 20
c = 10
x = 0:24
y = ptriangle( x, a, b, c )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	c = c,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
