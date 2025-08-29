# Pair Programming exercise 

Write an function that converts time into the corresponding english words - eg. '8:30' -> 'half past eight'

## Examples

- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two' 
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three' 
- '2:55' > 'five to three'

Range:
[0-12]:[0-60)

0:00 -> midnight
0:01 -> one past midnight
0:02 -> two past midnight
0:14 -> fourteen past midnight
0:15 -> quarter past midnight
0:29 -> twenty nine past midnight
0:30 -> half past midnight
0:31 -> 60 - 31 to 0 + 1 -> twenty-nine to one
...
1:00 -> one o'clock

HOUR DICT
0 -> 'midnight'
12 -> 'midday'
1 -> 'one' 
...

MIN DICT
1 -> 'one'
2 -> 'two'

Pseudocode:
Split string via : to get HOUR, MIN
Parse Min
- == 0 -> If Hour == 0 | 12 return HOUR else HOUR + o'clock
- == 30 -> Half past HOUR
- < 30 -> stringRep(MIN) past HOUR
- > 30 -> stringRep(Min) to HOUR + 1

Handle 24 hour:
13 -> one o'clock PM/AM
