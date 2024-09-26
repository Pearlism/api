<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Validator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            overflow: hidden;
            position: relative;
        }

        .night {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 0;
        }

        .shooting_star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
            border-radius: 50%;
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 1)); /* White glow */
            animation: falling 3000ms ease-in-out infinite;
        }

        @keyframes falling {
            0% {
                transform: translateY(-100vh);
            }
            100% {
                transform: translateY(100vh);
            }
        }

        .container {
            max-width: 600px;
            background: rgba(34, 34, 34, 0.6); /* 60% opacity */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6); /* White glowing effect */
            position: relative;
            z-index: 1;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group input, .form-group button {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #444;
            border-radius: 5px;
        }

        .form-group input {
            background-color: #333;
            color: #fff;
        }

        .form-group button {
            background-color: #555;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        .form-group button:hover {
            background-color: #777;
        }

        .message {
            margin-top: 20px;
            font-size: 1.2em;
        }

        .valid {
            color: green; /* Green for valid keys */
        }

        .invalid {
            color: red; /* Red for invalid keys */
        }
    </style>
</head>
<body>
    <div class="night" id="night"></div>
    <div class="container">
        <h1>Key Validator</h1>
        <div class="form-group">
            <label for="keyInput">Enter Key:</label>
            <input type="text" id="keyInput">
        </div>
        <div class="form-group">
            <button onclick="validateKey()">Validate Key</button>
        </div>
        <div id="result" class="message"></div>
    </div>

    <script src="api.js"></script> <!-- Add your api.js file here -->
    <script>
        function createFallingStars() {
            const night = document.getElementById('night');
            for (let i = 0; i < 6; i++) {
                const star = document.createElement('div');
                star.classList.add('shooting_star');
                star.style.left = `${Math.random() * 100}vw`;
                star.style.top = `${Math.random() * -100}vh`; // Start above the screen
                star.style.width = `${Math.random() * 2 + 1}px`;
                star.style.height = star.style.width;
                star.style.animationDuration = `${Math.random() * 4 + 1}s`;
                night.appendChild(star);
            }
        }

        createFallingStars();
    </script>
</body>
</html>
