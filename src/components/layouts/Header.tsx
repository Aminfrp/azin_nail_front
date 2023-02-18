import { useContext, useState } from 'react';
import { ColorModeContext } from '@/pages/_app';
import { NAV_LINKS } from '@/constants';
import { useTheme, Box, IconButton, Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import HeaderStyle from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

const Header = () => {
  //#region hooks
  const { palette } = useTheme()
  const { toggleColorMode } = useContext(ColorModeContext);
  const { pathname } = useRouter();
  const { lang } = useTranslation()
  // #endregion

  // #region states
  const [language, setLanguageState] = useState<string>("fa")
  // #endregion

  // #region methods
  const handleChangeLang = (e: SelectChangeEvent) => {
    setLanguage(e.target.value)
    setLanguageState(e.target.value)
  }
  // #endregion
  return (
    <header className="flex items-center justify-between">
      <h2>
        <strong>
          Azin Nail
        </strong>
      </h2>
      {/* nav links */}
      <ul className="flex gap-20">
        {NAV_LINKS.map((nav, index) => (
          <Link key={index} href={nav.url}>
            <li>
              <Typography color={`${pathname === nav.url && "secondary"}`}>
                {nav.name}
              </Typography>
            </li>
          </Link>)
        )}
      </ul>
      {/* theme mode and language */}
      <Box display="flex" gap={3}>
        {/* language */}
        <Box>
          <Select
            value={language}
            onChange={handleChangeLang}
            className="border-0"
            SelectDisplayProps={{
              style: {
                border: "none",
              }
            }}
          >
            <MenuItem className='flex justify-center bg-primary' value={"fa"}><Image src="/iran.svg" alt="us flag" width={50} height={50} /></MenuItem>
            <MenuItem className='flex justify-center bg-primary' value={"en"}><Image src="/us.svg" alt="us flag" width={50} height={50} /></MenuItem>
          </Select>
        </Box>
        {/* them */}
        <IconButton aria-label="set app mode" onClick={toggleColorMode}>
          {palette.mode === "light" ? <LightModeIcon className={HeaderStyle.lightModeIcon} /> : <NightsStayIcon className={HeaderStyle.darkModeIcon} />}
        </IconButton>
      </Box>
    </header>
  )
}

export default Header