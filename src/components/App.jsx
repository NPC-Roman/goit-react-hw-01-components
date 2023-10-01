import user from "./profile/user";
import data from "./statistics/data";
import friends from "./friendlist/friends";
import transactions from "./transactionhistory/transactions"

import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendlist/friendlist";
import { TransactionHistory } from "./transactionhistory/transactionhistory";
/*
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
*/
export const App = () => {
  return (
    <>
    <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} />

    <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />
  
    <TransactionHistory items={transactions} />
    </>    
  );
};