import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CreateListRow from './CreateListRow.jsx';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import mapper from '../lib/mapper.js';
import fetcher from '../lib/fetcher.js';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useStoreState } from 'easy-peasy';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

function CreateListForm({ setList, theme, setName }) {
  const id = Cookies.get('id');
  const [files, setFiles] = useState([]);

  const [parsedData, setParsedData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listItem, setListItem] = useState({
    title: '',
    description: '',
    price: '',
    image: null,
    src: '',
  });

  const Input = styled('input')({
    display: 'none',
  });

  const userList = useStoreState((state) => state.userList);

  const [snackState, setSnackState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = snackState;

  const handleClick = (newState) => () => {
    setSnackState({ open: true, ...newState });
  };

  const handleClose = () => {
    setSnackState({ ...snackState, open: false });
  };

  const handleListItemChange = (input, value) => {
    setListItem({
      ...listItem,
      [input]: value,
    });
  };

  const handleListSubmit = (e) => {
    e.preventDefault();
    setList({ list: [...userList.list, listItem] });
    setListItem({
      title: '',
      description: '',
      price: '',
      image: '',
    });
  };

  const beforeUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const requestOptions = {
      container: 'public',
      images: files,
      list: userList.list,
    };

    const response = await fetcher('upload/' + id, requestOptions);

    if (response.length) {
      console.log(response, userList.list);
      const parsed = await mapper(response, userList.list);
      setParsedData(parsed);
      return;
    }
    setError(true);
    setLoading(false);
  };

  const handleUpload = async () => {
    const result = await fetcher('list/' + id, {
      name: userList.name,
      list: parsedData,
    });

    if (result.status === 'success') {
      setLoading(false);
      setSuccess(true);
      setList({ name: '', list: [] });
      setName('');
      return;
    }
    setLoading(false);
    setError(true);
  };

  useEffect(() => {
    if (parsedData.length) {
      handleUpload();

      console.log(parsedData);
    }
  }, [parsedData]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 6000);
    }
  }, [success, error]);

  return (
    <>
      <Box
        component="form"
        onSubmit={handleListSubmit}
        noValidate
        sx={{ mt: 1, ml: 8, width: '100%' }}
      >
        <Grid container>
          <TextField
            sx={{
              background: theme.palette.blueCream.light,
              width: '40%',
              mr: 2,
            }}
            color="orange"
            margin="normal"
            required
            id="itemName"
            label="Item Name"
            name="itemName"
            value={listItem.title}
            onChange={(e) => {
              handleListItemChange('title', e.target.value);
            }}
          />
          <TextField
            sx={{
              background: theme.palette.blueCream.light,
              width: 100,
            }}
            color="orange"
            margin="normal"
            required
            id="price"
            label="Price"
            name="price"
            type="number"
            value={listItem.price}
            onChange={(e) => {
              handleListItemChange('price', e.target.value);
            }}
          />
          <TextField
            sx={{ background: theme.palette.blueCream.light }}
            color="orange"
            margin="normal"
            required
            fullWidth
            id="itemDescription"
            label="Item Description"
            name="itemDescription"
            value={listItem.description}
            onChange={(e) => {
              handleListItemChange('description', e.target.value);
            }}
          />
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => {
                setFiles([...files, { name: e.target.files[0].name }]);
                setListItem((list) => {
                  return {
                    ...list,
                    image: e.target.files[0],
                  };
                });
                const reader = new FileReader();
                const url = reader.readAsDataURL(e.target.files[0]);
                reader.onloadend = function (e) {
                  setListItem((list) => {
                    return {
                      ...list,
                      src: reader.result,
                    };
                  });
                };
              }}
            />
            <Button variant="contained" component="span">
              {listItem.image ? (
                <>
                  <CheckIcon /> added image{' '}
                </>
              ) : (
                'Upload'
              )}
            </Button>
          </label>

          <Button
            color="orange"
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              mb: 2,
              ml: 'auto',
              mr: 'auto',
              pt: 1,
              pl: 4,
              pr: 4,
              pb: 1,
            }}
          >
            Add
          </Button>
        </Grid>
        {userList.list.length > 0 ? (
          <hr style={{ margin: 30, marginTop: 40 }} />
        ) : null}
        <Grid
          container
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            m: 'auto',
          }}
        >
          {userList.list.map(({ title, description, price, link, src }, i) => (
            <CreateListRow
              key={i}
              name={title}
              description={description}
              price={price}
              link={link}
              src={src}
            />
          ))}
        </Grid>
        {userList.list.length > 0 ? (
          <Button
            color="blue"
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 16, mb: 2 }}
            onClick={beforeUpload}
          >
            {loading ? 'proccessing' : 'create list'}
          </Button>
        ) : null}
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={error}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
        autoHideDuration={3000}
      >
        <Alert severity="error">
          Something went wrong, please try again later
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={success}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
        autoHideDuration={3000}
      >
        <Alert severity="success">successfully created list</Alert>
      </Snackbar>
    </>
  );
}

export default CreateListForm;
