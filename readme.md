# Sata Back To Top

Just another "back to top" button plugin.

## Usage

``` html
<!DOCTYPE html>
<html>
	<head>
		<!-- include jquery -->
		<script type="text/javascript" src="lib/jquery.min.js"></script>

		<!-- include jquery.sata.ajax-result-printer.js -->
		<script type="text/javascript" src="../lib/jquery.sata.ajax-result-printer.js"></script>

		<script type="text/javascript">
			$(function () {
				$('#backtotop').sataBackToTop({
					// you can specify some options
					showSpeed: 'fast',
					hideSpeed: 0,
					scrollSpeed: 500
				});

				$('#backtotop-inner').sataBackToTop({
					// specify target if want scroll container
					$target: $('.partial')
				});
			});
		</script>

		<style type="text/css">
			.backtotop-btn {
				/* you should hide button first */
				display: none;
				right: 40px;
				bottom: 40px;
				background-color: darkcyan;
				padding: 20px;
				cursor: pointer;
			}
			/* global button */
			#backtotop {
				position: fixed;
			}
			/* button in container */
			#backtotop-inner {
				position: absolute;
			}

			/* if you want back to top in container */
			.wrapper {
				height: 300px;
				position: relative;
			}
			.partial {
				height: 100%;
				overflow: auto;
			}
		</style>
	</head>
	<body>
		<div class="backtotop-btn" id="backtotop">up</div>
		<p>
			Here is some content.
		</p>
		<div class="wrapper">
			<div class="backtotop-btn" id="backtotop-inner">up</div>
			<div class="partial">
				Here is inner content.
			</div>
		</div>
		<p>
			Here is some content.
		</p>
	</body>
</html>
```

Watch examples.

## Options

- **showSpeed** - button animation show speed (fadeIn)
- **hideSpeed** - button animation hide speed (fadeOut)
- **scrollSpeed** - container animation scroll speed
- **$target** - scrolling target (by default: *$(window)*)