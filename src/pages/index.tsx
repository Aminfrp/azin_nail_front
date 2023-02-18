import Typography from "@mui/material/Typography";
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Typography variant="h1" color="text" onClick={() => {
      }}>{t("common:hello")}</Typography>
    </>
  )
}
