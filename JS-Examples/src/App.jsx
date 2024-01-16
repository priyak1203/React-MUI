import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  MuiAccordion,
  MuiAlert,
  MuiAutoComplete,
  MuiAvatar,
  MuiBadge,
  MuiBottomNavigation,
  MuiBox,
  MuiBreadcrumbs,
  MuiButton,
  MuiCard,
  MuiCheckBox,
  MuiChip,
  MuiDateRangePicker,
  MuiDateTimePicker,
  MuiDialog,
  MuiDrawer,
  MuiGrid,
  MuiImageList,
  MuiLink,
  MuiLists,
  MuiLoading,
  MuiMenu,
  MuiNavbar,
  MuiPaper,
  MuiProgress,
  MuiRadioButton,
  MuiRating,
  MuiRatingGroup,
  MuiSelect,
  MuiSkeleton,
  MuiSnackbar,
  MuiSpeedDial,
  MuiStack,
  MuiSwitch,
  MuiTable,
  MuiTextField,
  MuiToggleButton,
  MuiTooltip,
  MuiTypography,
} from './components';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="app">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiToggleButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating />
      <MuiRatingGroup /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiBox /> */}
        {/* <MuiStack /> */}
        {/* <MuiGrid /> */}
        {/* <MuiPaper /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiMenu /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiLists /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoading /> */}
        {/* <MuiDateTimePicker /> */}
        <MuiDateRangePicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
