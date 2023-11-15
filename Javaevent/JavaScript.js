document.getElementById('colorButton').addEventListener('click', function() 
{
    changeColor();
});

function changeColor() 
{
    var button = document.getElementById('colorButton');
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
}

function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
function showFlag() 
{
    var selectedCountry = document.getElementById('countrySelect').value;
    var countryFlagMap = 
    {
        'Jordan': 'img/jordan-flag.png',
        'Kuwait': 'img/kuwait-flag.png',
        'Qatar': 'img/qatar-flag.png',
        'UAE': 'img/uae-flag.png',
        'USA': 'img/usa-flag.png',
        'UK': 'img/uk-flag.png',
        'Syria': 'img/syria-flag.png',
        'Mexico': 'img/mexico-flag.png',
        'Australia': 'img/australia-flag.png',
        'Italy': 'img/italy-flag.png'
    };
    var flagContainer = document.getElementById('flagContainer');
    var flagImage = document.getElementById('flagImage');

    if (selectedCountry in countryFlagMap) 
    {
        flagImage.src = countryFlagMap[selectedCountry];
        flagContainer.style.display = 'block';
    } else 
    {
        flagContainer.style.display = 'none';
    }
}
function validatePassword() 
{
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var messageDiv = document.getElementById('passwordMessage');
    var submitButton = document.getElementById('submitButton');

    if (password1.length < 6) 
    {
        messageDiv.innerHTML = 'Password must be at least 6 characters.';
        submitButton.style.display = 'none';
    } else if (password1 !== password2) 
    {
        messageDiv.innerHTML = 'Passwords do not match.';
        submitButton.style.display = 'none';
    } else 
    {
        messageDiv.innerHTML = '';
        submitButton.style.display = 'block';
    }
}

function showText() 
{
    var hiddenText = document.getElementById('hiddenText');
    hiddenText.style.display = 'block';
}

function hideText()
{
    var hiddenText = document.getElementById('hiddenText');
    hiddenText.style.display = 'none';
}
function updateTextArea() 
{
    var fontFamily = document.getElementById('fontFamilySelect').value;
    var fontSize = document.getElementById('fontSizeSelect').value;
    var isItalic = document.getElementById('ItalicCheckbox').checked;
    var isBold = document.getElementById('BoldCheckbox').checked;
    var isUnderline = document.getElementById('UnderlineCheckbox').checked;

    var styleString = 'font-family: ' + fontFamily + '; font-size: ' + fontSize + 'px;';
    if (isItalic) 
    {
      styleString += ' font-style: italic;';
    }
    if (isBold) 
    {
      styleString += ' font-weight: bold;';
    }
    if (isUnderline) {

      styleString += ' text-decoration: underline;';
    }

    document.getElementById('styledText').style = styleString;
  }
  function changeColor() 
  {
    var now = new Date();
    var seconds = now.getSeconds();
    var red = Math.sin(seconds * 0.1) * 128 + 128;
    var green = Math.sin(seconds * 0.2) * 128 + 128;
    var blue = Math.sin(seconds * 0.3) * 128 + 128;
    var colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = 'rgb(' + Math.round(red) + ',' + Math.round(green) + ',' + Math.round(blue) + ')';
  }
  setInterval(changeColor, 100);