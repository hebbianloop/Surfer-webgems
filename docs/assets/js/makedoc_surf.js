       $(document).ready(
            function() {
                if(surfaceMapInfo["full_brain_mesh"]){
                    $("#select-hemisphere").change(addPlot);
                    $("#select-kind").change(addPlot);
                }
                else{
                    $("#select-hemisphere").change(addPlot);
                    $("#select-kind").change(addPlot);
                }
                addPlot();
                $("#select-view").change(surfaceRelayout);
                $("#surface-plot").mouseup(function() {
                    $("#select-view").val("Jump View: Left");
                });
                $(window).resize(surfaceRelayout);

            });