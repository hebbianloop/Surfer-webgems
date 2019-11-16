		function makePlot(surface, hemisphere, divId) {
            decodeHemisphere(surfaceMapInfo, surface, hemisphere);
            info = surfaceMapInfo[surface + "_" + hemisphere];
            info["type"] = "mesh3d";
            info["vertexcolor"] = surfaceMapInfo["vertexcolor_" + hemisphere];

            let data = [info];

            info['lighting'] = getLighting();
            let layout = getLayout("surface-plot", "select-view",
                                   surfaceMapInfo["black_bg"]);
            let config = getConfig();

            Plotly.react(divId, data, layout, config);

            addColorbar(surfaceMapInfo["colorscale"],
                        surfaceMapInfo["cmin"],
                        surfaceMapInfo["cmax"],
                        divId, layout, config);
	        }

	        function addPlot() {

	            let hemisphere = $("#select-hemisphere").val();
	            let kind = $("#select-kind").val();
	            makePlot(kind, hemisphere, "surface-plot");
	        }

	        function surfaceRelayout(){
	            return updateLayout("surface-plot", "select-view",
	                                surfaceMapInfo["black_bg"]);
	        }  