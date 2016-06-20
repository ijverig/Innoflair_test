import sys

print "### Gross Pay ###"
print

hours = int(raw_input("Please enter how many hours of work: "))
rate = float(raw_input("Please enter the rate of an hour of work: "))

if hours < 0 or rate < 0:
    sys.exit("Sorry, values cannot be negative")

gross_pay = hours * rate

if hours > 40:
    exceeded_hours = hours - 40
    gross_pay += exceeded_hours * (rate * 0.5)

print
print "Gross pay: %.2f" % gross_pay
