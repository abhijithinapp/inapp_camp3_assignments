#!C:\Users\Abhijith\AppData\Local\Programs\Python\Python310\python.exe
# #(the shebang/SHArp bang line)

# #this line is mandatory
print("content-type: text/html\n\n")

#os and cgi is needed for file uploading
import os 
import cgi
import html
import cgitb
cgitb.enable()


#create an instance of FieldStorage class
form = cgi.FieldStorage()

# Taking the values of the field
name = form.getvalue('name','No name Available')
email = form.getvalue('email', 'No email Available')
password = form.getvalue('password', '***')
emotions = form.getlist('emotion')
satisfaction = form.getvalue('satisfaction', 'Does not apply')
comments = form.getvalue('comments', 'No comments')
location = form.getvalue('location', 'No location available')

try: #windows needs stdio set for binary mode
    import msvcrt
    #set mode for stdin and standard output(stdout)
    msvcrt.setmode(0,os.O_BINARY) #setting stdin to 0
    msvcrt.setmode(1,os.O_BINARY) #setting stdout to 1
except ImportError:
    pass

#to get the file from the nested FieldStorage instance
fileitem = form['bioimage']
imageFileName = None
#checking if a valide file was uploaded
if fileitem.filename:
    #remove path and keep only the filename 
    imageFileName = os.path.basename(fileitem.filename)
    open('files/'+imageFileName,'wb').write(fileitem.file.read())
    msg = "The file was uploaded to files/"+imageFileName
else:
    imageFileName = "placeholder.png"
    msg = "No file was uploaded"


print(f"""
<html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
    <div class="center-align">
        <h2>Feedback form</h2>
        """)
    
if imageFileName:
    print("<br><img width=\"100px\" height=\"100px\" src=\"files/%s\">" %(imageFileName))

print(f"""
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <P>Password: {'*'*len(password)}
    <p>Emotions: {', '.join(emotions)}</p>
    <p>satisfaction: {satisfaction}</p>
    <p>Location: {location}</p>
    <p>Comments: {comments}</p>
</div>
    <script type="text/javascript" src="js/materialize.min.js"></script>
    </body>
  </html>
        """)
  
















