// Get the textarea element with the id 'dialogueInput'
const textarea = document.getElementById('dialogueInput');

// Add an event listener to the textarea that automatically adjusts its height
// based on its content
textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
});

// Get the input and output elements
const dialogueInput = document.getElementById('dialogueInput');
const output = document.getElementById('output');
const characterButton = document.getElementById('characterButton');
const characterSliderContainer = document.getElementById('characterSliderContainer');
const characterSlider = document.getElementById('characterSlider');

// Add an event listener to the character button that toggles the character slider
characterButton.addEventListener('click', () => {
    if (characterSliderContainer.style.display === 'none') {
        characterSliderContainer.style.display = 'block';
        characterSlider.value = '0';
        updateOutput();
    } else {
        characterSliderContainer.style.display = 'none';
        updateOutput();
    }
});

// Add an event listener to the character slider that updates the output
characterSlider.addEventListener('input', () => {
    updateOutput();
});

// Add an event listener to the input element that processes the input text
// and updates the output element
dialogueInput.addEventListener('input', () => {
    // Get the input text
    let inputText = dialogueInput.value;

    // Replace '(gold amount)' with '[G]'
    inputText = inputText.replace(/\(gold amount\)/gi, '[G]');

    // Replace '(item)' with '[I]'
    inputText = inputText.replace(/\(item\)/gi, '[I]');

    // Replace color codes with their corresponding escape sequences
    inputText = inputText.replace(/\((\bdefault\b|\bred\b|\byellow\b|\bgreen\b|\bblue\b|\bpurple\b|\borange\b|\bteal\b|\bwhite\b)\)/gi, (match, color) => {
        if (color === 'default') {
            return '\\X';
        } else {
            return '\\' + color.charAt(0).toUpperCase();
        }
    });

    // Replace '(number)' with '[number]'
    inputText = inputText.replace(/\((\d)\)/gi, '[$1]');

       // Replace '(delay number)' with '^number'
       inputText = inputText.replace(/\(delay (\d)\)/gi, '^$1');

       // Replace newline characters with '&'
       inputText = inputText.replace(/\n/g, '&');
   
       // Replace '(name)' with '[C]'
       inputText = inputText.replace(/\(name\)/gi, '[C]');
   
       // Remove any text in parentheses that does not match any of the predefined rules
       inputText = inputText.replace(/\([^)]*\)/g, '');
   
       // Append a forward slash to the end of the dialogue
       inputText = inputText + '/';
   
       // Check if the character button is active
       if (characterSliderContainer.style.display === 'block') {
           // Add '\E' followed by the character number to the start of the input text
           inputText = '\\E' + characterSlider.value + inputText;
       }
   
       // Update the output element with the processed input text
       output.value = inputText;
   });
   
   // Function to update the output
   function updateOutput() {
       // Get the input text
       let inputText = dialogueInput.value;
   
       // Replace '(gold amount)' with '[G]'
       inputText = inputText.replace(/\(gold amount\)/gi, '[G]');
   
       // Replace '(item)' with '[I]'
       inputText = inputText.replace(/\(item\)/gi, '[I]');
   
       // Replace color codes with their corresponding escape sequences
       inputText = inputText.replace(/\((\bdefault\b|\bred\b|\byellow\b|\bgreen\b|\bblue\b|\bpurple\b|\borange\b|\bteal\b|\bwhite\b)\)/gi, (match, color) => {
           if (color === 'default') {
               return '\\X';
           } else {
               return '\\' + color.charAt(0).toUpperCase();
           }
       });
   
       // Replace '(number)' with '[number]'
       inputText = inputText.replace(/\((\d)\)/gi, '[$1]');
   
       // Replace '(delay number)' with '^number'
       inputText = inputText.replace(/\(delay (\d)\)/gi, '^$1');
   
       // Replace newline characters with '&'
       inputText = inputText.replace(/\n/g, '&');
   
       // Replace '(name)' with '[C]'
       inputText = inputText.replace(/\(name\)/gi, '[C]');
   
       // Remove any text in parentheses that does not match any of the predefined rules
       inputText = inputText.replace(/\([^)]*\)/g, '');
   
       // Append a forward slash to the end of the dialogue
       inputText = inputText + '/';
   
       // Check if the character button is active
       if (characterSliderContainer.style.display === 'block') {
           // Add '\E' followed by the character number to the start of the input text
           inputText = '\\E' + characterSlider.value + inputText;
       }
   
       // Update the output element with the processed input text
       output.value = inputText;
   }