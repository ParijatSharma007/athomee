// export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrl = " http://146.190.12.238:3000/";

export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = `${process.env.NEXT_APP_BASE_URL}`;
export const mediaURL = "https://athomee-admin.dedicateddevelopers.us";
export const PrimaryURL = "https://athomee-admin.dedicateddevelopers.us";
// export const PrimaryURL = "http://192.168.5.163:3000";

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const mediaUrl = (url: string) => {
  return `${baseUrlMedia}/uploads/${url}`;
};

export const endpoints = {
  auth: {
    signup: "auth/register",
    login: "auth/login",
    adminlogin:"auth/admin/login",
    clientProfileDetails: "client/profile",
    profileUpdate: "user/profile/update",
    clientProfileUpdate: "client/profile/update",
    signUpProfile: "user/signup",
    verify: "auth/verify",
    deleteClient: "client/profile/delete",
    forgotPassword: "auth/forgot-password",
    resetPassword: "auth/reset-password",
  },
  adminDashboard: {
    category: {
      categoryList: "admin/category/list",
      createCategory: "admin/category/create",
      updateCategory: "admin/category/sub-category/update-order",
      updateCategoryStatus: "admin/category/update-status",
      deleteCategory: "admin/category/delete",
      updateCategoryOrder: "admin/category/update-order",
    },
    commission: {
      getDefaultCommissionRate: "admin/commission-rate/get-default",
      updateCommissionRate: "admin/commission-rate/update-default",
      commissionList: "admin/commission-rate/list",
      createCommissionRate: "admin/commission-rate/create",
      updateCommissionRateById: "admin/commission-rate/update",
      deleteCommission: "admin/commission-rate/delete",
    },
    reservation: {
      reservationsList: "admin/reservations/list",
      getReservationInfo: "admin/reservations/info/",
      updateReservations: "admin/reservations/update/",
      deleteReservations: "admin/reservations/delete/",
    },
    users: {
      userList: "admin/users/list",
      userDetails: "admin/users/info",
      userDelete: "admin/users/delete",
      userupdate: "admin/users/update-status",
      userverify: "admin/users/verify",
      usercomission: "admin/users/commission-rate/update",
    },
    transactions: {
      transactionlist: "admin/transactions/list",
    },
    dashboard: {
      dashboarduser: "admin/dashboard/users",
      dashboardusergraph: "admin/dashboard/users/graph",
      dashboardservices: "admin/dashboard/services",
      dashboardservicesgraph: "admin/dashboard/services/graph",
      dashboardreservation: "admin/dashboard/reservations",
      dashboardrevenuegraph: "admin/dashboard/revenue/graph",
      dashboardcommisiongraph: "admin/dashboard/revenue/graph",
      dashboardreservationgraph: "admin/dashboard/reservations/graph",
      dashboardtrafficgraph: "admin/dashboard/traffic/graph",
      dashboardtopcategory: "admin/dashboard/top-categories",
    },
  },
  adminServices: {
    services: {
      serviceList: "admin/service/list",
      delete: "admin/service/delete/",
      getInfo: "/admin/service/info/",
      update: "/admin/service/update/",
    },
  },
  clientprofile: {
    profileview: "client/profile/info",
    profileupdate: "client/profile/update",
    profiledelete: "/api/client/profile/delete",
    clientInfo: "client/profile/info",
  },
  clientSettings: {
    notifications: "client/notification/settings",
  },
  clientServiceListings: {
    servicelists: "client/service/list",
    serviceDetails: (id: string) => `client/service/info/${id}`,
    serviceReview: "review/list",
  },
  serviceCategorylists: {
    categorylists: "category/list",
  },
  chatlists: {
    messagelists: "chat/message/list",
    chatuserlists: "chat/user/list",
    adminchatuserlists: "chat",
  },
  clientSaved: {
    collectionlists: "collection/list",
    createcollection: "collection/create",
    deletecollection: "collection/delete",
    updatecollection: "collection/update",
    createService: "collection/save-service",
    serviceinfo: "collection/info",
    removeService: "collection/remove-service",
  },
};

export const sucessNotificationEndPoints = [
  endpoints.auth.signup,
  endpoints.adminDashboard.commission.deleteCommission,
  endpoints.auth.verify,
  endpoints.auth.signUpProfile,
  endpoints.auth.login,
  endpoints.auth.profileUpdate,
  endpoints.adminDashboard.reservation.deleteReservations,
  endpoints.adminDashboard.users.userverify,
  endpoints.adminDashboard.category.updateCategory,
  endpoints.adminDashboard.category.createCategory,
  endpoints.adminServices.services.delete,
  endpoints.adminDashboard.users.userDelete,
  endpoints.adminDashboard.users.userupdate,
  endpoints.adminServices.services.update,
  endpoints.adminDashboard.commission.updateCommissionRate,
  endpoints.adminDashboard.commission.updateCommissionRateById,
  endpoints.adminDashboard.commission.createCommissionRate,
  endpoints.adminDashboard.reservation.updateReservations,
  endpoints.adminDashboard.users.usercomission,
  endpoints.clientprofile.profiledelete,
  endpoints.clientprofile.profileupdate,
  endpoints.auth.forgotPassword,
  endpoints.auth.resetPassword,
  endpoints?.clientSettings.notifications,
  endpoints?.clientSaved.createcollection,
  endpoints?.clientSaved.deletecollection,
];
