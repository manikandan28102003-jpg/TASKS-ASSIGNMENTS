<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Example</title>
    <!-- Include jQuery from Google CDN -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
</head>
<body>
    <h1>Hello, jQuery!</h1>
    <button id="clickMe">Click Me</button>

    <script>
        // jQuery code
        $(document).ready(function() {
            $('#clickMe').click(function() {
                alert('Button clicked!');
            });
        });
    </script>
</body>
</html>

