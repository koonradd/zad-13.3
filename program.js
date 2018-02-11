//process.stdin.setEncoding('utf-8');
//giprocess.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    /*var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});*/

console.log('node version: ' + process.versions.node);
console.log(process.env.LANG);

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
var input = process.stdin.read();
    if (input !== null) {
         var instruction = input.toString().trim();
        
 switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n'');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
