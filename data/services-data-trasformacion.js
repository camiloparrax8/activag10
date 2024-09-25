import { getLanguage, getTranslation } from "../utils/i18n";

const language = getLanguage();

const ServicesList = [
    {
        serviceIcon: 'flaticon-search-interface-symbol',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.evaluacion.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.evaluacion.descripcion'),

    },
    {
        serviceIcon: 'flaticon-house',
        serviceTitle: 'Urban',
        serviceTitle: getTranslation(language, 'transformacion.pasos.tostado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.tostado.descripcion'),

    },
    {
        id: 3,
        serviceIcon: 'flaticon-farming-and-gardening',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.molienda.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.molienda.descripcion'),

    },
    {
        serviceIcon: 'flaticon-flower-with-rounded-petals',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.descascarillado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.descascarillado.descripcion'),
    },
    {
        serviceIcon: 'flaticon-gardening-1',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.refinado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.refinado.descripcion'),
    },
    {
        serviceIcon: 'flaticon-gardening-1',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.conchado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.conchado.descripcion'),
    },
    {
        serviceIcon: 'flaticon-gardening-1',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.atemperado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.atemperado.descripcion'),
    },
    {
        serviceIcon: 'flaticon-farmer',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.moldeado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.moldeado.descripcion'),
    },
    {
        serviceIcon: 'flaticon-gardening',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.empacado.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.empacado.descripcion'),
    },
    {
        serviceIcon: 'flaticon-farming-and-gardening',
        serviceBadge: '',
        serviceTitle: getTranslation(language, 'transformacion.pasos.almacenamiento.titulo'),
        serviceDesc: getTranslation(language, 'transformacion.pasos.almacenamiento.descripcion'),
    }
]

export default ServicesList;