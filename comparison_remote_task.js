<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparison of VBox Carousels</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container mt-5">
    <div class="row">
        <!-- First VBox Carousel -->
        <div class="col-md-6">
            <h2>Carousel 1</h2>
            <div id="carousel1" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ul class="carousel-indicators">
                    <li data-target="#carousel1" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel1" data-slide-to="1"></li>
                    <li data-target="#carousel1" data-slide-to="2"></li>
                </ul>

                <!-- Images -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="image1_1.jpg" alt="Image 1.1" style="width:100%;">
                    </div>
                    <div class="carousel-item">
                        <img src="image1_2.jpg" alt="Image 1.2" style="width:100%;">
                    </div>
                    <div class="carousel-item">
                        <img src="image1_3.jpg" alt="Image 1.3" style="width:100%;">
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#carousel1" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#carousel1" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>

        <!-- Second VBox Carousel -->
        <div class="col-md-6">
            <h2>Carousel 2</h2>
            <div id="carousel2" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ul class="carousel-indicators">
                    <li data-target="#carousel2" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel2" data-slide-to="1"></li>
                    <li data-target="#carousel2" data-slide-to="2"></li>
                </ul>

                <!-- Images -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="image2_1.jpg" alt="Image 2.1" style="width:100%;">
                    </div>
                    <div class="carousel-item">
                        <img src="image2_2.jpg" alt="Image 2.2" style="width:100%;">
                    </div>
                    <div class="carousel-item">
                        <img src="image2_3.jpg" alt="Image 2.3" style="width:100%;">
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#carousel2" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#carousel2" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </div>
</div>

</body>
</html>
