import { IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextFieldStyled } from "./styles";

export const SearchBar = ({
  searchQuery,
  handleInputChange,
  handleQuerySearch,
}: {
  searchQuery: string;
  handleInputChange: (query: string) => void;
  handleQuerySearch: () => void;
}) => {
  return (
    <TextFieldStyled
      onKeyDown={({ key }) => key === "Enter" && handleQuerySearch()}
      variant="outlined"
      placeholder="Search users"
      value={searchQuery}
      onChange={({ target }) => handleInputChange(target.value)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => handleQuerySearch()}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      fullWidth
    />
  );
};
