import ElementPlus from 'element-plus';
import '../element-variables.scss';
import locale from 'element-plus/lib/locale/lang/es';

export default (app) => {
  app.use(ElementPlus, { locale });
};
