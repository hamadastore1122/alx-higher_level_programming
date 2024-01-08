#!/usr/bin/python3
"""Rectangle class Module"""
BaseGeometry = __import__("7-base_geometry").BaseGeometry


class Rectangle(BaseGeometry):
    """Rectangle class"""
    def __init__(self, width, height):
        """Initilize rectangle methood"""
        self.integer_validator("wwidth", width)
        self.__width = width
        self.integer_validator("height", height)
        self.__height = height
