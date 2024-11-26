var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Peta_Dusun_Desa_Sawahan_1 = new ol.format.GeoJSON();
var features_Peta_Dusun_Desa_Sawahan_1 = format_Peta_Dusun_Desa_Sawahan_1.readFeatures(json_Peta_Dusun_Desa_Sawahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Dusun_Desa_Sawahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Dusun_Desa_Sawahan_1.addFeatures(features_Peta_Dusun_Desa_Sawahan_1);
var lyr_Peta_Dusun_Desa_Sawahan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Dusun_Desa_Sawahan_1, 
                style: style_Peta_Dusun_Desa_Sawahan_1,
                interactive: true,
                title: '<img src="styles/legend/Peta_Dusun_Desa_Sawahan_1.png" /> Peta_Dusun_Desa_Sawahan'
            });
var format_SAWAHAN444Layer_2 = new ol.format.GeoJSON();
var features_SAWAHAN444Layer_2 = format_SAWAHAN444Layer_2.readFeatures(json_SAWAHAN444Layer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAHAN444Layer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAHAN444Layer_2.addFeatures(features_SAWAHAN444Layer_2);
var lyr_SAWAHAN444Layer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAWAHAN444Layer_2, 
                style: style_SAWAHAN444Layer_2,
                interactive: true,
    title: 'SAWAHAN 444 Layer<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_0.png" /> batas kawasan peternakan<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_1.png" /> kebun duren<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_2.png" /> longsor<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_3.png" /> peternakan domba<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_4.png" /> rencana rumah panjang untuk pertanian<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_5.png" /> rencana tanaman sayur<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_6.png" /> tandon air<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_7.png" /> Track 1<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_8.png" /> Track 10<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_9.png" /> Track 11<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_10.png" /> Track 2<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_11.png" /> Track 3<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_12.png" /> Track 4<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_13.png" /> Track 5<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_14.png" /> Track 6<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_15.png" /> Track 7<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_16.png" /> Track 8<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_17.png" /> Track 9<br />\
    <img src="styles/legend/SAWAHAN444Layer_2_18.png" /> <br />'
        });

lyr_Google_0.setVisible(true);lyr_Peta_Dusun_Desa_Sawahan_1.setVisible(true);lyr_SAWAHAN444Layer_2.setVisible(true);
var layersList = [lyr_Google_0,lyr_Peta_Dusun_Desa_Sawahan_1,lyr_SAWAHAN444Layer_2];
lyr_Peta_Dusun_Desa_Sawahan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'DUSUN': 'DUSUN', 'Covid': 'Covid', });
lyr_SAWAHAN444Layer_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Peta_Dusun_Desa_Sawahan_1.set('fieldImages', {'OBJECTID': 'Range', 'Id': 'Range', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'DUSUN': 'TextEdit', 'Covid': 'Range', });
lyr_SAWAHAN444Layer_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Peta_Dusun_Desa_Sawahan_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'DUSUN': 'no label', 'Covid': 'no label', });
lyr_SAWAHAN444Layer_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SAWAHAN444Layer_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});