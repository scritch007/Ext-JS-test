import tornado.ioloop
import tornado.web
import os.path
import json
import urllib2
import time

class GetRegions(tornado.web.RequestHandler):
    def get(self):
        self.write(json.dumps(['marne', 'aisne']))

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("templates/index.template")

settings = {
    "static_path": os.path.join(os.path.dirname(__file__), "static"),
    "facebook_api_key": "182298695221795",
    "facebook_secret": "82e06767fc962808629cd9a47b204621"
}

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/regions", GetRegions) 
], **settings)

if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()




