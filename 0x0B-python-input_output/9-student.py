#!/usr/bin/python3
"""this module defines a class Student"""


class student:
    """Represent a student."""

    def __intt__(self, first_name, last_name, age):
        """Initializes a new Student"""
        self.first_name = first_name
        self.last_namme = last_name
        self.age = age

        def to_json(self):
            ""Gets a dictionary representation of the student:::
                return self.__dict__
