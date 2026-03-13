ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31985").setExtent([291984.909858, 9223291.248750, 305724.749349, 9230273.653537]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadedeConservao_1 = new ol.format.GeoJSON();
var features_UnidadedeConservao_1 = format_UnidadedeConservao_1.readFeatures(json_UnidadedeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_UnidadedeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeConservao_1.addFeatures(features_UnidadedeConservao_1);
var lyr_UnidadedeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeConservao_1, 
                style: style_UnidadedeConservao_1,
                popuplayertitle: 'Unidade de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadedeConservao_1.png" /> Unidade de Conservação '
            });
var format_Equipamentos_2 = new ol.format.GeoJSON();
var features_Equipamentos_2 = format_Equipamentos_2.readFeatures(json_Equipamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Equipamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamentos_2.addFeatures(features_Equipamentos_2);
var lyr_Equipamentos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamentos_2, 
                style: style_Equipamentos_2,
                popuplayertitle: 'Equipamentos ',
                interactive: true,
                title: '<img src="styles/legend/Equipamentos_2.png" /> Equipamentos '
            });
var format_Fundeadouros_3 = new ol.format.GeoJSON();
var features_Fundeadouros_3 = format_Fundeadouros_3.readFeatures(json_Fundeadouros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Fundeadouros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundeadouros_3.addFeatures(features_Fundeadouros_3);
var lyr_Fundeadouros_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fundeadouros_3, 
                style: style_Fundeadouros_3,
                popuplayertitle: 'Fundeadouros ',
                interactive: true,
                title: '<img src="styles/legend/Fundeadouros_3.png" /> Fundeadouros '
            });
var format_BaciadeEvoluo_4 = new ol.format.GeoJSON();
var features_BaciadeEvoluo_4 = format_BaciadeEvoluo_4.readFeatures(json_BaciadeEvoluo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_BaciadeEvoluo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluo_4.addFeatures(features_BaciadeEvoluo_4);
var lyr_BaciadeEvoluo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluo_4, 
                style: style_BaciadeEvoluo_4,
                popuplayertitle: 'Bacia de Evolução ',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluo_4.png" /> Bacia de Evolução '
            });
var format_CanaldeAcesso_5 = new ol.format.GeoJSON();
var features_CanaldeAcesso_5 = format_CanaldeAcesso_5.readFeatures(json_CanaldeAcesso_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_CanaldeAcesso_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcesso_5.addFeatures(features_CanaldeAcesso_5);
var lyr_CanaldeAcesso_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcesso_5, 
                style: style_CanaldeAcesso_5,
                popuplayertitle: 'Canal de Acesso ',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcesso_5.png" /> Canal de Acesso '
            });
var format_AcessosDutovirios_6 = new ol.format.GeoJSON();
var features_AcessosDutovirios_6 = format_AcessosDutovirios_6.readFeatures(json_AcessosDutovirios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_AcessosDutovirios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutovirios_6.addFeatures(features_AcessosDutovirios_6);
var lyr_AcessosDutovirios_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutovirios_6, 
                style: style_AcessosDutovirios_6,
                popuplayertitle: 'Acessos Dutoviários ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutovirios_6.png" /> Acessos Dutoviários '
            });
var format_AcessosInternosRodovirios_7 = new ol.format.GeoJSON();
var features_AcessosInternosRodovirios_7 = format_AcessosInternosRodovirios_7.readFeatures(json_AcessosInternosRodovirios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_AcessosInternosRodovirios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodovirios_7.addFeatures(features_AcessosInternosRodovirios_7);
var lyr_AcessosInternosRodovirios_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodovirios_7, 
                style: style_AcessosInternosRodovirios_7,
                popuplayertitle: 'Acessos Internos Rodoviários ',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodovirios_7.png" /> Acessos Internos Rodoviários '
            });
var format_AcessosRodovirios_8 = new ol.format.GeoJSON();
var features_AcessosRodovirios_8 = format_AcessosRodovirios_8.readFeatures(json_AcessosRodovirios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_AcessosRodovirios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodovirios_8.addFeatures(features_AcessosRodovirios_8);
var lyr_AcessosRodovirios_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodovirios_8, 
                style: style_AcessosRodovirios_8,
                popuplayertitle: 'Acessos Rodoviários',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodovirios_8.png" /> Acessos Rodoviários'
            });
var format_InstalaesNoOperacionais_9 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionais_9 = format_InstalaesNoOperacionais_9.readFeatures(json_InstalaesNoOperacionais_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_InstalaesNoOperacionais_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionais_9.addFeatures(features_InstalaesNoOperacionais_9);
var lyr_InstalaesNoOperacionais_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionais_9, 
                style: style_InstalaesNoOperacionais_9,
                popuplayertitle: 'Instalações Não Operacionais ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionais_9.png" /> Instalações Não Operacionais '
            });
var format_Acostagem_10 = new ol.format.GeoJSON();
var features_Acostagem_10 = format_Acostagem_10.readFeatures(json_Acostagem_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Acostagem_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acostagem_10.addFeatures(features_Acostagem_10);
var lyr_Acostagem_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acostagem_10, 
                style: style_Acostagem_10,
                popuplayertitle: 'Acostagem ',
                interactive: true,
                title: '<img src="styles/legend/Acostagem_10.png" /> Acostagem '
            });
var format_Armazenagem_11 = new ol.format.GeoJSON();
var features_Armazenagem_11 = format_Armazenagem_11.readFeatures(json_Armazenagem_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Armazenagem_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazenagem_11.addFeatures(features_Armazenagem_11);
var lyr_Armazenagem_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Armazenagem_11, 
                style: style_Armazenagem_11,
                popuplayertitle: 'Armazenagem',
                interactive: true,
                title: '<img src="styles/legend/Armazenagem_11.png" /> Armazenagem'
            });
var format_reaseInstalaesAlfandegadasdoPorto_12 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPorto_12 = format_reaseInstalaesAlfandegadasdoPorto_12.readFeatures(json_reaseInstalaesAlfandegadasdoPorto_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_reaseInstalaesAlfandegadasdoPorto_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPorto_12.addFeatures(features_reaseInstalaesAlfandegadasdoPorto_12);
var lyr_reaseInstalaesAlfandegadasdoPorto_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPorto_12, 
                style: style_reaseInstalaesAlfandegadasdoPorto_12,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPorto_12.png" /> Áreas e Instalações Alfandegadas do Porto '
            });
var format_reasArrendveis_13 = new ol.format.GeoJSON();
var features_reasArrendveis_13 = format_reasArrendveis_13.readFeatures(json_reasArrendveis_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_reasArrendveis_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveis_13.addFeatures(features_reasArrendveis_13);
var lyr_reasArrendveis_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveis_13, 
                style: style_reasArrendveis_13,
                popuplayertitle: 'Áreas Arrendáveis ',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveis_13.png" /> Áreas Arrendáveis '
            });
var format_reasArrendadas_14 = new ol.format.GeoJSON();
var features_reasArrendadas_14 = format_reasArrendadas_14.readFeatures(json_reasArrendadas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_reasArrendadas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadas_14.addFeatures(features_reasArrendadas_14);
var lyr_reasArrendadas_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadas_14, 
                style: style_reasArrendadas_14,
                popuplayertitle: 'Áreas Arrendadas',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadas_14.png" /> Áreas Arrendadas'
            });
var format_Zoneamento_15 = new ol.format.GeoJSON();
var features_Zoneamento_15 = format_Zoneamento_15.readFeatures(json_Zoneamento_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Zoneamento_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamento_15.addFeatures(features_Zoneamento_15);
var lyr_Zoneamento_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneamento_15, 
                style: style_Zoneamento_15,
                popuplayertitle: 'Zoneamento',
                interactive: true,
                title: '<img src="styles/legend/Zoneamento_15.png" /> Zoneamento'
            });
var format_PoligonaldareadoPortoOrganizadodeCabedelo_16 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeCabedelo_16 = format_PoligonaldareadoPortoOrganizadodeCabedelo_16.readFeatures(json_PoligonaldareadoPortoOrganizadodeCabedelo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_PoligonaldareadoPortoOrganizadodeCabedelo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeCabedelo_16.addFeatures(features_PoligonaldareadoPortoOrganizadodeCabedelo_16);
var lyr_PoligonaldareadoPortoOrganizadodeCabedelo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeCabedelo_16, 
                style: style_PoligonaldareadoPortoOrganizadodeCabedelo_16,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Cabedelo',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeCabedelo_16.png" /> Poligonal da Área do Porto Organizado de Cabedelo'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeCabedelo_16,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_Zoneamento_15,],
                                fold: 'open',
                                title: 'Zoneamento'});
var group_reasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasArrendadas_14,],
                                fold: 'open',
                                title: 'Áreas Arrendadas'});
var group_reasArrendveis = new ol.layer.Group({
                                layers: [lyr_reasArrendveis_13,],
                                fold: 'open',
                                title: 'Áreas Arrendáveis '});
var group_reaseInstalaesAlfandegadasdoPorto = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadasdoPorto_12,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas do Porto '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_Armazenagem_11,],
                                fold: 'open',
                                title: 'Armazenagem'});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_Acostagem_10,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_InstalaesNoOperacionais = new ol.layer.Group({
                                layers: [lyr_InstalaesNoOperacionais_9,],
                                fold: 'open',
                                title: 'Instalações Não Operacionais '});
var group_AcessosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosRodovirios_8,],
                                fold: 'open',
                                title: 'Acessos Rodoviários '});
var group_AcessosInternosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosInternosRodovirios_7,],
                                fold: 'open',
                                title: 'Acessos Internos Rodoviários '});
var group_AcessosDutovirios = new ol.layer.Group({
                                layers: [lyr_AcessosDutovirios_6,],
                                fold: 'open',
                                title: 'Acessos Dutoviários '});
var group_CanaldeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaldeAcesso_5,],
                                fold: 'open',
                                title: 'Canal de Acesso '});
var group_BaciadeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciadeEvoluo_4,],
                                fold: 'open',
                                title: 'Bacia de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_Fundeadouros_3,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_Equipamentos = new ol.layer.Group({
                                layers: [lyr_Equipamentos_2,],
                                fold: 'open',
                                title: 'Equipamentos '});
var group_UnidadedeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadedeConservao_1,],
                                fold: 'open',
                                title: 'Unidade de Conservação'});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadedeConservao_1.setVisible(false);lyr_Equipamentos_2.setVisible(false);lyr_Fundeadouros_3.setVisible(false);lyr_BaciadeEvoluo_4.setVisible(false);lyr_CanaldeAcesso_5.setVisible(false);lyr_AcessosDutovirios_6.setVisible(false);lyr_AcessosInternosRodovirios_7.setVisible(false);lyr_AcessosRodovirios_8.setVisible(false);lyr_InstalaesNoOperacionais_9.setVisible(false);lyr_Acostagem_10.setVisible(false);lyr_Armazenagem_11.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPorto_12.setVisible(false);lyr_reasArrendveis_13.setVisible(false);lyr_reasArrendadas_14.setVisible(false);lyr_Zoneamento_15.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeCabedelo_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadedeConservao,group_Equipamentos,group_Fundeadouros,group_BaciadeEvoluo,group_CanaldeAcesso,group_AcessosDutovirios,group_AcessosInternosRodovirios,group_AcessosRodovirios,group_InstalaesNoOperacionais,group_Acostagem,group_Armazenagem,group_reaseInstalaesAlfandegadasdoPorto,group_reasArrendveis,group_reasArrendadas,group_Zoneamento,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadedeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Ano': 'Ano de Disponibilização ', 'Jurisdiç': 'Jurisdição ', 'P_Manejo': 'Plano de Manejo ', 'Categoria': 'Categoria', 'Fonte': 'Fonte', 'Estado': 'Estado', 'Município': 'Município', 'Ato_Legal': 'Ato Legal ', 'Uso': 'Uso', 'Decreto': 'Decreto', });
lyr_Equipamentos_2.set('fieldAliases', {'Tipo_de_Eq': 'Tipo de Equipamento ', 'Operador': 'Operador do Equipamento ', 'Finalidade': 'Finalidade do Equipamento', 'Capacidade': 'Capacidade do Equipamento (t) ', 'Data_Fabri': 'Data de Fabricação ', 'Tempo_Uso': 'Tempo de Uso (anos) ', });
lyr_Fundeadouros_3.set('fieldAliases', {'Profund_M': 'Profundidade (m) ', 'Fundeadour': 'Fundeadouro', 'Quantidade': 'Quantidade', 'Localizaç': 'Localização ', 'Diamet_M': 'Diâmetro (m) ', 'Largura_M': 'Largura (m) ', 'Comprim_M': 'Comprimento (m) ', });
lyr_BaciadeEvoluo_4.set('fieldAliases', {'Profund_M': 'Profundidade (m)', 'Quantidade': 'Quantidade', 'Comprim_M': 'Comprimento (m)', 'Largura_M': 'Largura (m) ', 'Localizaç': 'Localização ', 'Diâmetro_': 'Diâmetro (m) ', });
lyr_CanaldeAcesso_5.set('fieldAliases', {'Profu_M': 'Profundidade (m) ', 'Trecho': 'Trecho', 'Comp_M': 'Comprimento (m)', 'Diamet_M': 'Diâmetro (m) ', 'Largura_M': 'Largura (m)', });
lyr_AcessosDutovirios_6.set('fieldAliases', {'Nome': 'Nome', 'Material': 'Material Transportado', 'Posição': 'Posição', 'Operação': 'Operação', 'Operador': 'Operador', 'Tipo': 'Tipo de Duto ', 'Município': 'Município', 'Atualizaç': 'Atualização ', 'UF': 'Unidade de Federação ', });
lyr_AcessosInternosRodovirios_7.set('fieldAliases', {'Nome': 'Nome', 'Extens_Km': 'Extensão (Km) ', });
lyr_AcessosRodovirios_8.set('fieldAliases', {'Sigla': 'Sigla', 'PNV': 'PNV (plano nacional da viação)', 'Jurisdiç': 'Jurisdição ', 'Classific': 'Classificação ', 'Concess': 'Concessão ', 'Município': 'Município', 'UF': 'Unidade de Federação ', 'VMD': 'VMD Diário ', 'Extens_KM': 'Extensão (Km) ', });
lyr_InstalaesNoOperacionais_9.set('fieldAliases', {'Área_m2': 'Área (m²) ', 'Tipo': 'Tipo de Instalação ', 'Uso': 'Uso da Instalação ', 'Regime': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_Acostagem_10.set('fieldAliases', {'Profund_M': 'Profundidade (m)', 'Caract_Con': 'Características Construtivas ', 'Id_Berço': 'Identificador do Berço ', 'Conservaç': 'Estado de Conservação ', 'Comprim_M': 'Comprimento (m) ', 'Produtos_': 'Principais Produtos ', });
lyr_Armazenagem_11.set('fieldAliases', {'Tipo': 'Tipo da Instalação ', 'Capacidade': 'Capacidade (t)', 'Volume_m³': 'Volume (m³) ', 'Regime': 'Regime de Exploração ', 'Area_Armz_': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadasdoPorto_12.set('fieldAliases', {'Área_m²': 'Área (m²) ', 'Nome': 'Nome', 'Companhia': 'Companhia', 'Inst_Legal': 'Instrumento Legal', 'Produto': 'Tipo de Produto ', });
lyr_reasArrendveis_13.set('fieldAliases', {'Área_m²': 'Área (m²) ', 'Nome': 'Nome da Área ', 'Uso': 'Uso', });
lyr_reasArrendadas_14.set('fieldAliases', {'Área_m²': 'Área (m²) ', 'Grupo': 'Grupo', 'Autoridade': 'Autoridade', 'Contrato': 'Número do Contrato ', 'Arrend_Ori': 'Arrendatário Original ', 'Arrend_Atu': 'Arrendatário Atual ', 'Tipo': 'Tipo Especificado no Instrumento ', 'Objeto': 'Objeto', 'Finalidade': 'Finalidade', 'Observ': 'Observações ', 'Data_Iníc': 'Data de Início do Arrendamento', 'Data_Termi': 'Data de Término do Arrendamento ', });
lyr_Zoneamento_15.set('fieldAliases', {'Categoria': 'Categoria', 'Operador': 'Operador', 'Área_m²': 'Área (m²) ', });
lyr_PoligonaldareadoPortoOrganizadodeCabedelo_16.set('fieldAliases', {'Name': 'Nome', 'Ins. Legal': 'Instrumento Legal ', 'Tipo': 'Tipo', 'Área (m²': 'Área (m²) ', });
lyr_UnidadedeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Ano': 'TextEdit', 'Jurisdiç': 'TextEdit', 'P_Manejo': 'TextEdit', 'Categoria': 'TextEdit', 'Fonte': 'TextEdit', 'Estado': 'TextEdit', 'Município': 'TextEdit', 'Ato_Legal': 'TextEdit', 'Uso': 'TextEdit', 'Decreto': 'TextEdit', });
lyr_Equipamentos_2.set('fieldImages', {'Tipo_de_Eq': 'TextEdit', 'Operador': 'TextEdit', 'Finalidade': 'TextEdit', 'Capacidade': 'TextEdit', 'Data_Fabri': 'TextEdit', 'Tempo_Uso': 'TextEdit', });
lyr_Fundeadouros_3.set('fieldImages', {'Profund_M': 'TextEdit', 'Fundeadour': 'TextEdit', 'Quantidade': 'TextEdit', 'Localizaç': 'TextEdit', 'Diamet_M': 'TextEdit', 'Largura_M': 'TextEdit', 'Comprim_M': 'TextEdit', });
lyr_BaciadeEvoluo_4.set('fieldImages', {'Profund_M': 'TextEdit', 'Quantidade': 'TextEdit', 'Comprim_M': 'TextEdit', 'Largura_M': 'TextEdit', 'Localizaç': 'TextEdit', 'Diâmetro_': 'TextEdit', });
lyr_CanaldeAcesso_5.set('fieldImages', {'Profu_M': 'TextEdit', 'Trecho': 'TextEdit', 'Comp_M': 'TextEdit', 'Diamet_M': 'TextEdit', 'Largura_M': 'TextEdit', });
lyr_AcessosDutovirios_6.set('fieldImages', {'Nome': 'TextEdit', 'Material': 'TextEdit', 'Posição': 'TextEdit', 'Operação': 'TextEdit', 'Operador': 'TextEdit', 'Tipo': 'TextEdit', 'Município': 'TextEdit', 'Atualizaç': 'TextEdit', 'UF': 'TextEdit', });
lyr_AcessosInternosRodovirios_7.set('fieldImages', {'Nome': 'TextEdit', 'Extens_Km': 'TextEdit', });
lyr_AcessosRodovirios_8.set('fieldImages', {'Sigla': 'TextEdit', 'PNV': 'TextEdit', 'Jurisdiç': 'TextEdit', 'Classific': 'TextEdit', 'Concess': 'TextEdit', 'Município': 'TextEdit', 'UF': 'TextEdit', 'VMD': 'TextEdit', 'Extens_KM': 'TextEdit', });
lyr_InstalaesNoOperacionais_9.set('fieldImages', {'Área_m2': 'TextEdit', 'Tipo': 'TextEdit', 'Uso': 'TextEdit', 'Regime': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_Acostagem_10.set('fieldImages', {'Profund_M': 'TextEdit', 'Caract_Con': 'TextEdit', 'Id_Berço': 'TextEdit', 'Conservaç': 'TextEdit', 'Comprim_M': 'TextEdit', 'Produtos_': 'TextEdit', });
lyr_Armazenagem_11.set('fieldImages', {'Tipo': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume_m³': 'TextEdit', 'Regime': 'TextEdit', 'Area_Armz_': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPorto_12.set('fieldImages', {'Área_m²': 'TextEdit', 'Nome': 'TextEdit', 'Companhia': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Produto': 'TextEdit', });
lyr_reasArrendveis_13.set('fieldImages', {'Área_m²': 'TextEdit', 'Nome': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendadas_14.set('fieldImages', {'Área_m²': 'TextEdit', 'Grupo': 'TextEdit', 'Autoridade': 'TextEdit', 'Contrato': 'TextEdit', 'Arrend_Ori': 'TextEdit', 'Arrend_Atu': 'TextEdit', 'Tipo': 'TextEdit', 'Objeto': 'TextEdit', 'Finalidade': 'TextEdit', 'Observ': 'TextEdit', 'Data_Iníc': 'TextEdit', 'Data_Termi': 'TextEdit', });
lyr_Zoneamento_15.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Área_m²': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeCabedelo_16.set('fieldImages', {'Name': 'TextEdit', 'Ins. Legal': 'TextEdit', 'Tipo': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_UnidadedeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Jurisdiç': 'inline label - visible with data', 'P_Manejo': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Ato_Legal': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Decreto': 'inline label - visible with data', });
lyr_Equipamentos_2.set('fieldLabels', {'Tipo_de_Eq': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Data_Fabri': 'inline label - visible with data', 'Tempo_Uso': 'inline label - visible with data', });
lyr_Fundeadouros_3.set('fieldLabels', {'Profund_M': 'inline label - visible with data', 'Fundeadour': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaç': 'inline label - visible with data', 'Diamet_M': 'inline label - visible with data', 'Largura_M': 'inline label - visible with data', 'Comprim_M': 'inline label - visible with data', });
lyr_BaciadeEvoluo_4.set('fieldLabels', {'Profund_M': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Comprim_M': 'inline label - visible with data', 'Largura_M': 'inline label - visible with data', 'Localizaç': 'inline label - visible with data', 'Diâmetro_': 'inline label - visible with data', });
lyr_CanaldeAcesso_5.set('fieldLabels', {'Profu_M': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Comp_M': 'inline label - visible with data', 'Diamet_M': 'inline label - visible with data', 'Largura_M': 'inline label - visible with data', });
lyr_AcessosDutovirios_6.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Posição': 'inline label - visible with data', 'Operação': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'Atualizaç': 'inline label - visible with data', 'UF': 'inline label - visible with data', });
lyr_AcessosInternosRodovirios_7.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extens_Km': 'inline label - visible with data', });
lyr_AcessosRodovirios_8.set('fieldLabels', {'Sigla': 'inline label - visible with data', 'PNV': 'inline label - visible with data', 'Jurisdiç': 'inline label - visible with data', 'Classific': 'inline label - visible with data', 'Concess': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'VMD': 'inline label - visible with data', 'Extens_KM': 'inline label - visible with data', });
lyr_InstalaesNoOperacionais_9.set('fieldLabels', {'Área_m2': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Regime': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_Acostagem_10.set('fieldLabels', {'Profund_M': 'inline label - visible with data', 'Caract_Con': 'inline label - visible with data', 'Id_Berço': 'inline label - visible with data', 'Conservaç': 'inline label - visible with data', 'Comprim_M': 'inline label - visible with data', 'Produtos_': 'inline label - visible with data', });
lyr_Armazenagem_11.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume_m³': 'inline label - visible with data', 'Regime': 'inline label - visible with data', 'Area_Armz_': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPorto_12.set('fieldLabels', {'Área_m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Produto': 'inline label - visible with data', });
lyr_reasArrendveis_13.set('fieldLabels', {'Área_m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendadas_14.set('fieldLabels', {'Área_m²': 'inline label - visible with data', 'Grupo': 'inline label - visible with data', 'Autoridade': 'inline label - visible with data', 'Contrato': 'inline label - visible with data', 'Arrend_Ori': 'inline label - visible with data', 'Arrend_Atu': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Objeto': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'Data_Iníc': 'inline label - visible with data', 'Data_Termi': 'inline label - visible with data', });
lyr_Zoneamento_15.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Área_m²': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeCabedelo_16.set('fieldLabels', {'Name': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeCabedelo_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});