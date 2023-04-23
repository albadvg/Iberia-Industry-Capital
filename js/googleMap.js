
        

        function initMap() { 
            let address = {lat:49.8131975286944 , lng: 6.421085444545099};
            let map = new google.maps.Map( document.getElementById('map') , {
                zoom : 16,
                center : address,
                mapId : '76f73280dffdca94',
            });

            const pinViewStyles = new google.maps.marker.PinView({
            background: "#ff8455",
            borderColor: "#ff8455",
            scale: 1.2,
            glyphColor : 'white',
            });
            

            let markerView = new google.maps.marker.AdvancedMarkerView({
            position : address,
            map : map,
            content : pinViewStyles.element,
            });
        };

        
        
