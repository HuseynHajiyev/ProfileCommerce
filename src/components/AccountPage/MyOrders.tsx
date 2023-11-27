import { Box, Button, Stack, Typography } from "@mui/material";
import Header from "./microComponents/Header"
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../features/userReducer/userSlice";
import { VscTrash } from "react-icons/vsc";
import { OrderInterface } from "../../models/UserInterface";
import { useEffect, useState } from "react";
import { RootState } from "../../app/store";



interface OrderRowInterface {
  id: number;
  total: number;
  number_of_items: number;
  date: string;
  shipping: string;
  status: string;
  cancel: string;
}

const MyOrders = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userState);
  const [rows, setRows] =useState<OrderRowInterface[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 6,
    page: 0,
  });

  const handleCancelOrder = (orderId: number) => {
    dispatch(removeOrder(orderId));
  };
  const columns = [
    { field: 'id', headerName: 'Order ID', width: 114},
    { field: 'total', headerName: 'Total', width: 114},
    { field: 'number_of_items', headerName: '№ of Items', width: 114},
    { field: 'date', headerName: 'Date', width: 114},
    { field: 'shipping', headerName: 'Shipping', width: 114},
    { field: 'status', headerName: 'Status', width: 114},
    { 
      field: 'cancel', 
      headerName: 'Cancel Order',
      width: 140,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: any) => (
        <strong>
          {params.value}
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ marginLeft: 1 }}
            onClick={() => handleCancelOrder(params.id)}
          >
            <VscTrash size={20} />
          </Button>
        </strong>
      ),

  },
  ];
  useEffect(() => {
    if (userState.userOrders) {
      const mappedRows: OrderRowInterface[] = userState.userOrders.map((order: OrderInterface): OrderRowInterface => ({
        id: order.id,
        total: order.total,
        number_of_items: order.products.length,
        date: order.date,
        shipping: `${order.shipping}`,
        status: order.status,
        cancel: '',
      }));
      setRows(mappedRows);
    }
  }, [userState.userOrders]);
  
  
  return (
    <Box>
      <Box paddingRight={'20%'} paddingBottom={'3%'}>
      <Header headerText={'My Orders'} />
      <Stack spacing={2}>
        <Box>
          <Typography variant={'h6'} fontFamily={'Mulish'} fontWeight={600}>
            You can find your Order History here:
          </Typography>
        </Box>
      </Stack>
    </Box>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          headerAlign: 'center',
          align: 'center',
        }))}
        pageSizeOptions={[5, 10, 20]}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            justifyContent: 'center',
          },
          '& .MuiDataGrid-cell': {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          },
        }}
      />
      </Box>
    </Box>
  )
}

export default MyOrders
