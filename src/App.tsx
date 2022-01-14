import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export function App(): ReactElement {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("Welcome")}</h1>
    </div>
  );
}
