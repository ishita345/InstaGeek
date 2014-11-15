from sqlalchemy import Column, Integer, String
from database import Base

class Blogs(Base):
    __tablename__ = 'blogs'
    Title = Column(String(500), primary_key=True)
    Date = Column(String(100))
    URL = Column(String(500), unique=True)
    Tags = Column(String(500))

    def __init__(self, Title, Date=None, URL=None, Tags=None):
        self.Title = Title
        self.Date = Date
        self.URL = URL
        self.Tags = Tags

    def __repr__(self):
        return '<Title %r>' % (self.Title)