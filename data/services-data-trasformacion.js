import { getLanguage, getTranslation } from "../utils/i18n";

const language = getLanguage();

const ServicesList = [
    {
        id: 1,
        serviceIcon: 'fas fa-search',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.evaluacion.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.evaluacion.descripcion'),

    },
    {
        serviceIcon: 'fas fa-fire',
        serviceTitle: 'Urban',
        serviceTitle: getTranslation(language, 'transformacion.pasos.tostado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.tostado.descripcion'),

    },
    {
        id: 3,
        serviceIcon: 'fas fa-mortar-pestle',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.molienda.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.molienda.descripcion'),

    },
    {
        serviceIcon: 'fas fa-vacuum',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.descascarillado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.descascarillado.descripcion'),
    },
    {
        serviceIcon: 'fas fa-blender',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.refinado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.refinado.descripcion'),
    },
    {
        serviceIcon: 'fas fa-flask-potion',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.conchado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.conchado.descripcion'),
    },
    {
        serviceIcon: 'fas fa-thermometer',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.atemperado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.atemperado.descripcion'),
    },
    {
        serviceIcon: 'fas fa-oven',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.moldeado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.moldeado.descripcion'),
    },
    {
        serviceIcon: 'fas fa-box-open',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.empacado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.empacado.descripcion'),
    },
    {
        serviceIcon: 'fas fa-container-storage',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.almacenamiento.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.almacenamiento.descripcion'),
    },
    {
        serviceIcon: 'fas fa-truck-container',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.despacho.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.despacho.descripcion'),
    },
    {
        serviceIcon: 'fas fa-store',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.comercializacion.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.comercializacion.descripcion'),
    },
]

export default ServicesList;