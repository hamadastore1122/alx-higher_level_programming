#!/usr/bin/python3
'''1-my_list.py
'''


class MyList(list):
    ''' this class inherits from list()'''

    def print_sorted(self):
        """ print the sorted list """
        print(sorted(self))
        print(sorted((self))
