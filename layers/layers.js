var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_India_1 = new ol.format.GeoJSON();
var features_India_1 = format_India_1.readFeatures(json_India_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_1.addFeatures(features_India_1);
var lyr_India_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_1, 
                style: style_India_1,
                interactive: true,
                title: '<img src="styles/legend/India_1.png" /> India'
            });
var format_Hydropowerreservoirs_2 = new ol.format.GeoJSON();
var features_Hydropowerreservoirs_2 = format_Hydropowerreservoirs_2.readFeatures(json_Hydropowerreservoirs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydropowerreservoirs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydropowerreservoirs_2.addFeatures(features_Hydropowerreservoirs_2);
var lyr_Hydropowerreservoirs_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hydropowerreservoirs_2, 
                style: style_Hydropowerreservoirs_2,
                interactive: true,
                title: '<img src="styles/legend/Hydropowerreservoirs_2.png" /> Hydropower reservoirs'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_India_1.setVisible(true);lyr_Hydropowerreservoirs_2.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_India_1,lyr_Hydropowerreservoirs_2];
lyr_India_1.set('fieldAliases', {'State_Name': 'State_Name', });
lyr_Hydropowerreservoirs_2.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Reservoir Name': 'Reservoir Name', 'Relative closeness': 'Relative closeness', '25% of Available area': '25% of Available area', 'Extractable power': 'Extractable power', 'Wind speed': 'Wind speed', 'Elevation': 'Elevation', 'LCOE': 'LCOE', 'CF': 'CF', });
lyr_India_1.set('fieldImages', {'State_Name': 'TextEdit', });
lyr_Hydropowerreservoirs_2.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Reservoir Name': '', 'Relative closeness': '', '25% of Available area': '', 'Extractable power': '', 'Wind speed': '', 'Elevation': 'TextEdit', 'LCOE': 'TextEdit', 'CF': 'TextEdit', });
lyr_India_1.set('fieldLabels', {'State_Name': 'inline label', });
lyr_Hydropowerreservoirs_2.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Reservoir Name': 'inline label', 'Relative closeness': 'inline label', '25% of Available area': 'inline label', 'Extractable power': 'inline label', 'Wind speed': 'inline label', 'Elevation': 'inline label', 'LCOE': 'inline label', 'CF': 'inline label', });
lyr_Hydropowerreservoirs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});