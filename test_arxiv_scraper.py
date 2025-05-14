import os
import pytest
from update_paper_links import update_paper_links

# Make sure the main script can be imported
def test_import():
    import main
    assert main is not None

# Test config loading if config file exists
def test_load_config():
    if os.path.exists('config.yaml'):
        from main import load_config
        config = load_config('config.yaml')
        assert isinstance(config, dict)
        assert 'keywords' in config

# Test basic functionality of get_authors
def test_get_authors():
    from main import get_authors
    
    class MockAuthor:
        def __init__(self, name):
            self.name = name
    
    authors = [MockAuthor("John Doe"), MockAuthor("Jane Smith")]
    result = get_authors(authors)
    assert result == "John Doe, Jane Smith"
