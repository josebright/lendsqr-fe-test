import React from 'react'
import { type IUserRecord } from '../../../utils/Interfaces'
import './index.scss'
import { Divider, Grid } from '@mui/material'
import Spacer from '../../Templates/SpacerComponent'

interface TabContentProps {
  id: string
  user: IUserRecord
}

const TabContent: React.FC<TabContentProps> = ({ id, user }) => {
  const textContainer = (title: string, value: string | number): JSX.Element => (
        <>
          <div className='title-text'>{title}</div>
          <Spacer height='0.5rem' />
          <div className='value-text'>{value}</div>
          <Spacer height='1rem' />
        </>
  )
  console.log('Content for {id}: ', id) // Use the id to navigate to different tabs.

  return (
        <div className="general-container">
            <section>
                <div className='section-title'>Personal Information</div>
                <div className='box-container'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('FULL NAME', user.PersonalInformation.fullName)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('PHONE NUMBER', user.PersonalInformation.phoneNumber)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('EMAIL ADDRESS', user.PersonalInformation.emailAddress)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('BVN', user.PersonalInformation.BVNNumber)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('GENDER', user.PersonalInformation.gender)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('MARITAL STATUS', user.PersonalInformation.maritalStatus)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('CHILDREN', user.PersonalInformation.numberOfChildren)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('TYPE OF RESIDENCE', user.PersonalInformation.typeOfResidence)}
                        </Grid>
                        <Spacer height='2rem' />
                    </Grid>
                </div>
            </section>

            <Spacer height='1rem' />
            <Divider />
            <Spacer height='1rem' />
            <section>
                <div className='section-title'>Education and Employment</div>
                <div className='box-container'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('LEVEL OF EDUCATION', user.EducationAndEmployment.levelOfEducation)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('EMPLOYMENT STATUS', user.EducationAndEmployment.employmentStatus)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('SCTOR OF EMPLOYMENT', user.EducationAndEmployment.sectorOfEmployment)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('DURATION OF EMPLOYMENT', user.EducationAndEmployment.durationOfEmployment)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('OFFICE EMAIL', user.EducationAndEmployment.officeEmail)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('MONTHLY INCOME', `₦${user.EducationAndEmployment.monthlyIncome}`)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('LOAN REPAYMENT', `₦${user.EducationAndEmployment.loanRepayment}`)}
                        </Grid>
                        <Spacer height='2rem' />
                    </Grid>
                </div>
            </section>

            <Spacer height='1rem' />
            <Divider />
            <Spacer height='1rem' />
            <section>
                <div className='section-title'>Socials</div>
                <div className='box-container'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('TWITTER', user.Socials.twitterHandle)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('FACEBOOK', user.Socials.facebookName)}
                        </Grid>
                        <Spacer height='2rem' />
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            {textContainer('INSTAGRAM', user.Socials.instagramHandle)}
                        </Grid>
                        <Spacer height='2rem' />
                    </Grid>
                </div>
            </section>

            <Spacer height='1rem' />
            <Divider />
            <Spacer height='1rem' />
            <section>
                <div className='section-title'>Guarantor(s)</div>
                {user.Guarantors.map((Guarantor, index) => (
                    <>
                        <div key={index} className='box-container'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    {textContainer('FULL NAME', Guarantor.fullName)}
                                </Grid>
                                <Spacer height='2rem' />
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    {textContainer('PHONE NUMBER', Guarantor.phone)}
                                </Grid>
                                <Spacer height='2rem' />
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    {textContainer('EMAIL ADDRESS', Guarantor.email)}
                                </Grid>
                                <Spacer height='2rem' />
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    {textContainer('RELATIONSHIP', Guarantor.relationship)}
                                </Grid>
                                <Spacer height='2rem' />
                            </Grid>
                        </div>
                        <Spacer height='1rem' />
                    </>
                ))}
            </section>
            <Spacer height='2rem' />

        </div>
  )
}

export default TabContent
